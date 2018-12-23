---
title: 全栈开发实战
comments: true
---

# Vue+Koa2 开发完整的前后端项目

花了差不多一个月的时间，从 0 开始撸了一个基于`vue`、`koa2`、`mysql`、`antd`前后端分离的后台管理系统。在看本教程之前，要求你对 vue 和 koa(可参考[ikcamp](https://camp.qianduan.group/koa2/2/0/0)出品的 node 入门教程)有一定的了解，通过本文能了解到 Vue 如何构建单页面应用、antd 在后台管理系统中的应用、Koa2 如何通过 API 与 Vue 前端进行数据的交互、以及用 Sequelize 来操作 MySQL 数据库等知识技巧。另外作者本人也只是刚入行前端半年多的小白，在写本教程的时候可能会有考虑不周甚至错误的地方，恳请大家指证，最后希望本文能给想自己完成一个从前端到后端、数据库完整作品的同学带来帮助。

[完整项目预览](http://132.232.73.32:3000/#/home)

[github 地址](https://github.com/GongJS/vue-antd-management)

体验账号：`redell` &nbsp; 密码：`123`

<img-wrapper>
   <img src="./images/admin.gif"/>
</img-wrapper>

## 项目主要技术栈分析

- "vue": "^2.5.2"
- "vue-router": "^3.0.1"
- "ant-design-vue": "^1.0.2"&nbsp;&nbsp;&nbsp;&nbsp;antd 框架 vue 版本
- "axios": "^0.18.0",
- "koa": "^2.5.2",
- "koa-router": "^7.4.0"&nbsp;&nbsp;&nbsp;&nbsp;koa 路由
- "koa-static": "^5.0.0"&nbsp;&nbsp;&nbsp;&nbsp;koa 用来托管静态资源的中间件
- "koa-jwt": "^3.3.2"&nbsp;&nbsp;&nbsp;&nbsp;koa 用来加密的中间件
- "mysql": "^2.16.0"&nbsp;&nbsp;&nbsp;&nbsp;nodejs 的 mysql 驱动，本地环境需要自己再安装 mysql 服务（本项目采用的是 mysql5.7）
- "sequelize": "3.28.0"&nbsp;&nbsp;&nbsp;&nbsp;操作数据库的 ORM
  ::: tip 提示
  尽量保持所有第三库的版本跟上文列出来的一致，以防止因版本不一致而导致的一些奇奇怪怪的 bug。
  :::

## 项目结构

这里用 vue-cli 来完成 demo 的前端构建，作者的 vue-cli 版本是 2.9.6

```bash
vue init webpack demo
cd demo
```

安装过程如下图所示：
![An image](./images/vue-cli.jpg)

前端构建完成后，进入到`Demo`文件夹，新建一个`server`文件夹和`app.js`文件，并在新建的`server`文件夹里新建`config`、`controllers`、`models`、`schema`、`routes`五个文件夹。
最终的项目结构如下图所示：

```bash
.
├── LICENSE
├── README.md
├── app.js  // Koa入口文件
├── build // vue-cli 生成，用于webpack监听、构建
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── logo.png
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config // vue-cli 生成&自己加的一些配置文件
│   ├── default.conf
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist // Vue build 后的文件夹
│   ├── index.html // 入口文件
│   └── static // 静态资源
├── index.html // vue-cli生成，用于容纳Vue组件的主html文件。单页应用就只有一个html
├── package.json // npm的依赖、项目信息文件
├── server // Koa后端，用于提供Api
│   ├── config // 配置文件夹
│   ├── controllers // controller-控制器
│   ├── models // model-模型
│   ├── routes // route-路由
│   └── schema // schema-数据库表结构
├── src // vue-cli 生成&自己添加的utils工具类
│   ├── App.vue // 主文件
│   ├── assets // 相关静态资源存放
│   ├── components // 单文件组件
│   ├── main.js // 引入Vue等资源、挂载Vue的入口js
│   └── router // vue前端路由
└── yarn.lock // 用yarn自动生成的lock文件
```
