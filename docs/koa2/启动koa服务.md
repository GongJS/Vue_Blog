---
title: 启动koa服务
comments: true
---

打开`package.json`文件，在`"dependencies"`的下面加入：

```json
//package.json

"koa": "^2.5.2",
"koa-bodyparser": "^4.2.1",
"koa-json": "^2.0.2",
"koa-jwt": "^3.3.2",
"koa-router": "^7.4.0",
"koa-static": "^5.0.0"
```

保存文件，执行

```
yarn  //安装koa及其中间件
```

安装完成后，打开`app.js`文件，在里面写入如下内容：

```js
//app.js

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
app.use(bodyParser())

app.on('error', function(err, ctx) {
  console.log('server error', err)
}) //监听错误信息

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000') //监控3000端口
})

export default app
```

这里我们用了 ES6 的`import`语法，没有用 node 的`require`语法,但是如果直接这样写会报错，因为 node 还不支持`import`、`await`等语法，需要借助 babel 进行转译:

```
yarn add babel-register@^6.26.0 --dev
```

安装完成后，在`Demo`文件夹里新建一个`index.js`文件，在里面写入如下内容：

```js
//index.js

require('babel-core/register')({
  presets: [
    [
      'env',
      {
        targets: {
          node: true
        }
      }
    ]
  ]
})
require('./app.js')
```

保存，在终端执行

```bash
node index.js
```

这时候如果终端出现：`server is running at http://localhost:3000`,说明我们的 koa2 服务器已经启动成功了。
