# PhpWebStudy

<img src="http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/512x512.png" width="256" alt="App Icon" />

[English](./README.md) | 简体中文

## Mac上的PHP&Web开发环境管理工具

[![GitHub release](https://img.shields.io/github/release/xpf0000/PhpWebStudy.svg)](https://github.com/xpf0000/PhpWebStudy/releases)  [![Total Downloads](https://img.shields.io/github/downloads/xpf0000/PhpWebStudy/total.svg)](https://github.com/xpf0000/PhpWebStudy/releases)

PhpWebStudy 是一款mac上的PHP和web开发环境管理工具,包含php,nginx,apache,msyql,memcached,redis以及host管理
## ✨ 特性

- 简洁明了的图形操作界面
- 版本切换 根据开发需要 选择对应的版本进行开发调试
- 各软件自定义配置
- 日志文件即时查看
- host管理
- 常见PHP项目url rewrite一键设置
- 一键生成SSL自签名证书
- 开发中常用的小工具, 时间戳转换, 编码/解码

## 💽 安装稳定版

[GitHub](https://github.com/xpf0000/PhpWebStudy/releases) 提供了已经编译好的稳定版安装包，当然你也可以自己克隆代码编译打包。

## 🖥 应用界面

![01.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/01.png)
![02.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/02.png)
![03.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/03.png)
![04.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/04.png)
![05.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/05.png)
![06.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/06.png)
![07.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/07.png)
![08.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/08.png)
![09.png](http://mbimage.ybvips.com/electron/phpwebstudy/screenshots/09.png)

## ⌨️ 本地开发

### 克隆代码

```bash
git clone git@github.com:xpf0000/PhpWebStudy.git
```

### 安装依赖

```bash
cd PhpWebStudy
yarn install
```

天朝大陆用户建议使用淘宝的 npm 源

```bash
npm config set registry 'https://registry.npm.taobao.org'
export ELECTRON_MIRROR='https://npm.taobao.org/mirrors/electron/'
export SASS_BINARY_SITE='https://npm.taobao.org/mirrors/node-sass'
```

### 开发模式

```bash
yarn run dev
```

### 编译打包

```bash
yarn run build
```

完成之后可以在项目的 `release` 目录看到编译打包好的应用文件

### PHP扩展

当前一键安装包括: ionCube memcache memcached redis swoole

未添加到一键安装里的 使用如下方法安装 替换成自己的PHP版本

```bash
cd 扩展目录
/usr/local/Cellar/php@7.2.34/7.2.34/bin/phpize
./configure --with-php-config=/usr/local/Cellar/php@7.2.34/7.2.34/bin/php-config
make
make install
```


## 🛠 技术栈

- [Electron](https://electronjs.org/)
- [vite](https://vitejs.dev/)
- [Vue3](https://v3.vuejs.org/)
- [VueX](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Element-Plus](https://element-plus.org/en-US/)

## 问题反馈及建议

提Issues, 或者扫码加QQ群

![QQqun.png](http://mbimage.ybvips.com/electron/imageresize/QQqun.png)

## 📜 开源许可

基于 [MIT license](https://opensource.org/licenses/MIT) 许可进行开源。
