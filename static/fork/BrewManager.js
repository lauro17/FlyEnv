const join = require('path').join
const { execSync, spawn } = require('child_process')
const { exec } = require('child-process-promise')
const BaseManager = require('./BaseManager')
class BrewManager extends BaseManager {
  constructor() {
    super()
  }

  async installBrew() {
    console.log('installBrew !!!!!')
    let brew = await this._checkBrew()
    if (brew !== 0) {
      let info = brew ? brew.toString() : '切换失败'
      process.send({
        command: this.ipcCommand,
        key: this.ipcCommandKey,
        info: {
          code: 1,
          msg: `${info}<br/>`
        }
      })
    } else {
      if (!global.Server.BrewCellar) {
        let repo = execSync('brew --repo').toString().trim()
        let cellar = execSync('brew --cellar').toString().trim()
        global.Server.BrewHome = repo
        global.Server.BrewFormula = join(repo, 'Library/Taps/homebrew/homebrew-core/Formula')
        global.Server.BrewCellar = cellar
        process.send({
          command: 'application:global-server-updata',
          key: 'application:global-server-updata',
          info: global.Server
        })
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 0,
            msg: 'SUCCESS'
          }
        })
      }
    }
  }

  _doInstall(rb) {
    return new Promise((resolve, reject) => {
      const child = spawn('brew', ['install', '--verbose', rb])
      this._childHandle(child, resolve, reject)
    })
  }

  _doUnInstall(rb) {
    return new Promise((resolve, reject) => {
      console.log('_doUnInstall: ', rb)
      const child = spawn('brew', ['uninstall', '--verbose', rb])
      this._childHandle(child, resolve, reject)
    })
  }

  install(name) {
    this._doInstall(name)
      .then(() => {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 0,
            msg: 'SUCCESS'
          }
        })
      })
      .catch(() => {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 1,
            msg: 'FAIL'
          }
        })
      })
  }

  uninstall(name) {
    this._doUnInstall(name)
      .then(() => {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 0,
            msg: 'SUCCESS'
          }
        })
      })
      .catch(() => {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 1,
            msg: 'FAIL'
          }
        })
      })
  }

  brewinfo(name) {
    exec(`brew info ${name}`)
      .then((res) => {
        const info = res.stdout
        const reg = new RegExp('(stable )([\\s\\S]*?)( \\(bottled\\))', 'g')
        const version = reg.exec(info)[2]
        const installed = !info.includes('Not installed')
        const obj = {
          version,
          installed,
          name
        }
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 0,
            msg: 'SUCCESS',
            data: obj
          }
        })
      })
      .catch((err) => {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 1,
            msg: err.stderr
          }
        })
      })
  }

  addTap(name) {
    exec('brew tap')
      .then((res) => {
        const stdout = res.stdout
        if (stdout.includes(name)) {
          return null
        } else {
          return exec(`brew tap ${name}`)
        }
      })
      .then(() => {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 0,
            msg: `Brew install tap ${name} SUCCESS`
          }
        })
      })
      .catch((err) => {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 1,
            msg: err.stderr
          }
        })
      })
  }

  binVersion(bin, name) {
    let reg = null
    let command = ''
    const handleCatch = (err) => {
      process.send({
        command: this.ipcCommand,
        key: this.ipcCommandKey,
        info: {
          code: 1,
          msg: err.stderr
        }
      })
    }
    const handleThen = (res) => {
      const str = res.stdout + res.stderr
      let version = ''
      try {
        version = reg.exec(str)[2].trim()
      } catch (e) {}
      if (version) {
        process.send({
          command: this.ipcCommand,
          key: this.ipcCommandKey,
          info: {
            code: 0,
            msg: 'Success',
            version
          }
        })
      } else {
        handleCatch({
          stderr: '获取版本号失败'
        })
      }
    }
    switch (name) {
      case 'apachectl':
        reg = new RegExp('(Apache/)([\\s\\S]*?)( )', 'g')
        command = `${bin} -v`
        break
      case 'nginx':
        reg = new RegExp('(nginx/)([\\s\\S]*?)(\\n)', 'g')
        command = `${bin} -v`
        break
      case 'php-fpm':
        reg = new RegExp('(PHP )([\\s\\S]*?)( )', 'g')
        command = `${bin} -v`
        break
      case 'mysqld_safe':
        bin = bin.replace('_safe', '')
        reg = new RegExp('(Ver )([\\s\\S]*?)( )', 'g')
        command = `${bin} -V`
        break
      case 'memcached':
        reg = new RegExp('(memcached )([\\s\\S]*?)(\\n)', 'g')
        command = `${bin} -V`
        break
      case 'redis-server':
        reg = new RegExp('(server v=)([\\s\\S]*?)( )', 'g')
        command = `${bin} -v`
        break
    }
    console.log('binVersion command: ', command)
    exec(command).then(handleThen).catch(handleCatch)
  }
}
module.exports = BrewManager
