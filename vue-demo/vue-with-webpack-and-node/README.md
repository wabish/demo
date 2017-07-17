# vue-with-webpack-and-node

使用 vue、webpack、node 搭建一个简单的单页面应用。

## 目标

1. SPA 单页面应用，使用 vue-router；
2. 分开发模式、调试模式和上线模式；
3. 开发模式有热替换和代理服务器；
4. 调试模式与上线模式后端为 PHP；
5. wbepack 构建、eslint 规范、vue 框架、node 代理。

## 运行

### 开发模式

1. 进行 **server** 目录，运行 ``node index.js`` 开启 node 服务器；
2. 根目录下运行 ``npm start`` 开始热替换开发。

## 调试模式 & 生产模式

1. 将 Apache 的 ``localhost`` 主域名设置代理到 **dist** 目录下；
2. 根目录下运行 ``npm run debug``（生产模式为 ``npm run build``） 开始调试开发（生产运行）；
3. 由于 PHP 未使用路由等，所以 ajax 请求的 url 需修改一下，注释掉请求 node 的接口，打开请求 php 的接口。

## 技术栈

1. 运行 webpack-dev-server，热替换；
2. 使用 vue、es6；
3. 使用 vue-loader、eslint；
4. 使用 vue 单文件组件、vue-loader、eslint-loader；
5. 添加调试模式与生产模式，即生成 dist 文件夹；
6. 模拟请求 node 服务器；
7. 调试模式与生产模式请求 php 服务器；