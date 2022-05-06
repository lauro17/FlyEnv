const join = require('path').join
const existsSync = require('fs').existsSync
const readFileSync = require('fs').readFileSync
const writeFileSync = require('fs').writeFileSync
const unlinkSync = require('fs').unlinkSync
const Utils = require('./Utils')
class HostManager {
  constructor() {
    this.ipcCommand = ''
    this.ipcCommandKey = ''
  }
  exec(commands) {
    this.ipcCommand = commands[0]
    console.log('this.ipcCommand: ', this.ipcCommand)
    commands.splice(0, 1)
    this.ipcCommandKey = commands[0]
    console.log('this.ipcCommandKey: ', this.ipcCommandKey)
    commands.splice(0, 1)

    let fn = commands[0]
    console.log('fn: ', fn)
    commands.splice(0, 1)
    console.log('commands: ', commands)
    this[fn](...commands)
  }

  hostList() {
    let hostfile = join(global.Server.BaseDir, 'host.json')
    if (!existsSync(hostfile)) {
      Utils.writeFileAsync(hostfile, '[]')
      process.send({
        command: this.ipcCommand,
        key: this.ipcCommandKey,
        info: {
          code: 0,
          msg: 'SUCCESS',
          hosts: []
        }
      })
      return
    }
    Utils.readFileAsync(hostfile).then((json) => {
      json = JSON.parse(json)
      this._initHost(json)
        .then(() => {
          process.send({
            command: this.ipcCommand,
            key: this.ipcCommandKey,
            info: {
              code: 0,
              msg: 'SUCCESS',
              hosts: json
            }
          })
        })
        .catch(() => {})
    })
  }

  handleHost(host, flag, old) {
    console.log('handleHost: ', host, flag, old)
    let hostfile = join(global.Server.BaseDir, 'host.json')
    let hostList = []
    if (existsSync(hostfile)) {
      try {
        hostList = JSON.parse(readFileSync(hostfile, 'utf-8'))
      } catch (e) {
        console.log(e)
      }
    }
    switch (flag) {
      case 'add':
        this._addVhost(host)
          .then(() => {
            return this._addHost(host)
          })
          .then(() => {
            console.log('hostfile: ', hostfile)
            hostList.push(host)
            writeFileSync(hostfile, JSON.stringify(hostList))
            process.send({
              command: this.ipcCommand,
              key: this.ipcCommandKey,
              info: {
                code: 0,
                msg: 'SUCCESS',
                hosts: hostList
              }
            })
          })
          .catch((err) => {
            console.log(err)
            process.send({
              command: this.ipcCommand,
              key: this.ipcCommandKey,
              info: {
                code: 1,
                msg: err
              }
            })
          })
        break
      case 'del':
        this._delVhost(host)
          .then(() => {
            return this._delHost(host)
          })
          .then(() => {
            let index = -1
            hostList.some((h, i) => {
              if (h.id === host.id) {
                index = i
                return true
              }
              return false
            })
            if (index >= 0) {
              hostList.splice(index, 1)
            }
            writeFileSync(hostfile, JSON.stringify(hostList))
            process.send({
              command: this.ipcCommand,
              key: this.ipcCommandKey,
              info: {
                code: 0,
                msg: 'SUCCESS',
                hosts: hostList
              }
            })
          })
          .catch((err) => {
            process.send({
              command: this.ipcCommand,
              key: this.ipcCommandKey,
              info: {
                code: 1,
                msg: err
              }
            })
          })
        break
      case 'edit':
        this._delVhost(old)
          .then(() => {
            return this._delHost(old)
          })
          .then(() => {
            return this._addVhost(host)
          })
          .then(() => {
            return this._addHost(host)
          })
          .then(() => {
            let index = -1
            hostList.some((h, i) => {
              if (h.id === old.id) {
                index = i
                return true
              }
              return false
            })
            if (index >= 0) {
              hostList[index] = host
            }
            writeFileSync(hostfile, JSON.stringify(hostList))
            process.send({
              command: this.ipcCommand,
              key: this.ipcCommandKey,
              info: {
                code: 0,
                msg: 'SUCCESS',
                hosts: hostList
              }
            })
          })
          .catch((err) => {
            process.send({
              command: this.ipcCommand,
              key: this.ipcCommandKey,
              info: {
                code: 1,
                msg: err
              }
            })
          })
        break
    }
  }

  _delVhost(host) {
    return new Promise((resolve) => {
      let nginxvpath = join(global.Server.BaseDir, 'vhost/nginx')
      let apachevpath = join(global.Server.BaseDir, 'vhost/apache')
      let rewritepath = join(global.Server.BaseDir, 'vhost/rewrite')
      let logpath = join(global.Server.BaseDir, 'vhost/logs')
      let hostname = host.name
      let nvhost = join(nginxvpath, `${hostname}.conf`)
      let avhost = join(apachevpath, `${hostname}.conf`)
      let rewritep = join(rewritepath, `${hostname}.conf`)
      let accesslogng = join(logpath, `${hostname}.log`)
      let errorlogng = join(logpath, `${hostname}.error.log`)
      let accesslogap = join(logpath, `${hostname}-access_log`)
      let errorlogap = join(logpath, `${hostname}-error_log`)
      let arr = [nvhost, avhost, rewritep, accesslogng, errorlogng, accesslogap, errorlogap]
      for (let f of arr) {
        if (existsSync(f)) {
          unlinkSync(f)
        }
      }
      resolve(true)
    })
  }

  _addVhost(host) {
    return new Promise((resolve, reject) => {
      try {
        let nginxvpath = join(global.Server.BaseDir, 'vhost/nginx')
        let apachevpath = join(global.Server.BaseDir, 'vhost/apache')
        let rewritepath = join(global.Server.BaseDir, 'vhost/rewrite')
        let logpath = join(global.Server.BaseDir, 'vhost/logs')
        Utils.createFolder(nginxvpath)
        Utils.createFolder(apachevpath)
        Utils.createFolder(rewritepath)
        Utils.createFolder(logpath)

        let nginxtmpl = join(global.Server.Static, 'tmpl/nginx.vhost')
        let apachetmpl = join(global.Server.Static, 'tmpl/apache.vhost')

        if (host.useSSL) {
          nginxtmpl = join(global.Server.Static, 'tmpl/nginxSSL.vhost')
          apachetmpl = join(global.Server.Static, 'tmpl/apacheSSL.vhost')
        }

        let hostname = host.name
        let nvhost = join(nginxvpath, `${hostname}.conf`)
        let avhost = join(apachevpath, `${hostname}.conf`)
        let hostalias = host.alias
          ? host.alias
              .split('\n')
              .filter((item) => {
                return item && item.length > 0
              })
              .join(' ')
          : host.name
        let ntmpl = readFileSync(nginxtmpl, 'utf-8')
          .replace(/#Server_Alias#/g, hostalias)
          .replace(/#Server_Root#/g, host.root)
          .replace(/#Rewrite_Path#/g, rewritepath)
          .replace(/#Server_Name#/g, hostname)
          .replace(/#Log_Path#/g, logpath)
          .replace(/#Server_Cert#/g, host.ssl.cert)
          .replace(/#Server_CertKey#/g, host.ssl.key)
          .replace(/#Port_Nginx#/g, host.port.nginx)
          .replace(/#Port_Nginx_SSL#/g, host.port.nginx_ssl)
        writeFileSync(nvhost, ntmpl)

        let atmpl = readFileSync(apachetmpl, 'utf-8')
          .replace(/#Server_Alias#/g, hostalias)
          .replace(/#Server_Root#/g, host.root)
          .replace(/#Rewrite_Path#/g, rewritepath)
          .replace(/#Server_Name#/g, hostname)
          .replace(/#Log_Path#/g, logpath)
          .replace(/#Server_Cert#/g, host.ssl.cert)
          .replace(/#Server_CertKey#/g, host.ssl.key)
          .replace(/#Port_Apache#/g, host.port.apache)
          .replace(/#Port_Apache_SSL#/g, host.port.apache_ssl)
        writeFileSync(avhost, atmpl)

        let rewrite = host.nginx.rewrite.trim()
        writeFileSync(join(rewritepath, `${hostname}.conf`), rewrite)
        resolve(true)
      } catch (e) {
        reject(e)
      }
    })
  }

  _delHost(item) {
    return new Promise((resolve, reject) => {
      let alias = item.alias ? item.alias.split('\n').join(' ') : item.name
      Utils.readFileAsync('/private/etc/hosts')
        .then((content) => {
          let x = `127.0.0.1     ${alias}\n`
          content = content.replace(x, '')
          Utils.writeFileAsync('/private/etc/hosts', content)
            .then(() => {
              console.log('host update success !!!!!!')
              resolve(true)
            })
            .catch((err) => {
              console.log('host update fail: ', err)
              reject(err)
            })
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  _initHost(list) {
    return new Promise((resolve, reject) => {
      if (list.length === 0) {
        resolve(true)
        return
      }
      let host = ''
      for (let item of list) {
        let alias = item.alias ? item.alias.split('\n').join(' ') : item.name
        host += `127.0.0.1     ${alias}\n`
      }
      Utils.readFileAsync('/private/etc/hosts')
        .then((content) => {
          let x = content.match(/(#X-HOSTS-BEGIN#)([\s\S]*?)(#X-HOSTS-END#)/g)
          if (x && x[0]) {
            x = x[0]
            content = content.replace(x, '')
          }
          x = `#X-HOSTS-BEGIN#\n${host}#X-HOSTS-END#`
          content = content.trim()
          content += `\n${x}`
          Utils.writeFileAsync('/private/etc/hosts', content)
            .then(() => {
              resolve(true)
            })
            .catch((err) => {
              reject(err)
            })
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  _addHost(item) {
    return new Promise((resolve, reject) => {
      let alias = item.alias ? item.alias.split('\n').join(' ') : item.name
      Utils.readFileAsync('/private/etc/hosts')
        .then((content) => {
          console.log('content: ', content)
          let x = content.match(/(#X-HOSTS-BEGIN#)([\s\S]*?)(#X-HOSTS-END#)/g)
          console.log('x: ', x)
          if (!x) {
            x = `#X-HOSTS-BEGIN#\n127.0.0.1     ${alias}\n#X-HOSTS-END#`
          } else {
            x = x[0]
            content = content.replace(x, '')
            if (x.indexOf(alias) < 0) {
              x = x.replace('#X-HOSTS-END#', '')
              x += `127.0.0.1     ${alias}\n#X-HOSTS-END#`
            } else {
              console.log('host has exits !!!!')
              resolve(true)
              return
            }
          }
          content = content.trim()
          content += `\n${x}`
          console.log('x: ', x)
          console.log('content: ', content)
          Utils.writeFileAsync('/private/etc/hosts', content)
            .then(() => {
              console.log('host update success !!!!!!')
              resolve(true)
            })
            .catch((err) => {
              console.log('host update fail: ', err)
              reject(err)
            })
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
module.exports = HostManager
