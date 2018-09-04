---
title: 全栈开发实战：用Vue+Koa2开发完整的前后端项目
sidebar: auto
comments: true
---

# 全栈开发实战：用Vue+Koa2开发完整的前后端项目

花了差不多一个月的时间，从0开始撸了一个基于`vue`、`koa2`、`mysql`、`antd`前后端分离的后台管理系统。在看本教程之前，要求你对vue和koa(可参考[ikcamp](https://camp.qianduan.group/koa2/2/0/0)出品的node入门教程)有一定的了解，通过本文能了解到Vue如何构建单页面应用、antd在后台管理系统中的应用、Koa2如何通过API与Vue前端进行数据的交互、以及用Sequelize来操作MySQL数据库等知识技巧。另外作者本人也只是刚入行前端半年多的小白，在写本教程的时候可能会有考虑不周甚至错误的地方，恳请大家指证，最后希望本文能给想自己完成一个从前端到后端、数据库完整作品的同学带来帮助。

[完整项目预览](http://132.232.73.32:3000/#/home)  

 [github地址](https://github.com/GongJS/vue-antd-management)     

 体验账号：`redell` &nbsp; 密码：`123` 

 <div style="text-align: center"><img src="./images/admin.gif"></div>

## 项目主要技术栈分析
- "vue": "^2.5.2"
- "vue-router": "^3.0.1"
- "ant-design-vue": "^1.0.2"&nbsp;&nbsp;&nbsp;&nbsp;antd框架  vue版本
- "axios": "^0.18.0",
- "koa": "^2.5.2",
- "koa-router": "^7.4.0"&nbsp;&nbsp;&nbsp;&nbsp;koa路由
- "koa-static": "^5.0.0"&nbsp;&nbsp;&nbsp;&nbsp;koa用来托管静态资源的中间件 
- "koa-jwt": "^3.3.2"&nbsp;&nbsp;&nbsp;&nbsp;koa用来加密的中间件 
- "mysql": "^2.16.0"&nbsp;&nbsp;&nbsp;&nbsp;nodejs的mysql驱动，本地环境需要自己再安装mysql服务（本项目采用的是mysql5.7）
- "sequelize": "3.28.0"&nbsp;&nbsp;&nbsp;&nbsp;操作数据库的ORM
  ::: tip 提示
  尽量保持所有第三库的版本跟上文列出来的一致，以防止因版本不一致而导致的一些奇奇怪怪的bug。
  :::

## 项目结构
这里用vue-cli来完成demo的前端构建，作者的vue-cli版本是2.9.6
``` bash
vue init webpack demo
cd demo
```
安装过程如下图所示：
![An image](./images/vue-cli.jpg)

前端构建完成后，进入到`Demo`文件夹，新建一个`server`文件夹和`app.js`文件，并在新建的`server`文件夹里新建`config`、`controllers`、`models`、`schema`、`routes`五个文件夹。
最终的项目结构如下图所示：
``` bash
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
## 启动koa服务
打开`package.json`文件，在`"dependencies"`的下面加入：
``` json
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
``` js
//app.js

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
app.use(bodyParser())

app.on('error', function (err, ctx) {
  console.log('server error', err)
})                                 //监听错误信息

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')   //监控3000端口
})

export default app
```
这里我们用了ES6的`import`语法，没有用node的`require`语法,但是如果直接这样写会报错，因为node还不支持`import`、`await`等语法，需要借助babel进行转译:
```
yarn add babel-register@^6.26.0 --dev
```
安装完成后，在`Demo`文件夹里新建一个`index.js`文件，在里面写入如下内容：
``` js
//index.js

require('babel-core/register')({
    'presets': [
      ['env', {
        'targets': {
          'node': true
        }
      }]
    ]
  })
  require('./app.js')
```
保存，在终端执行
``` bash
node index.js
```
这时候如果终端出现：`server is running at http://localhost:3000`,说明我们的koa2服务器已经启动成功了。

## 构建前端页面
这个Demo准备做一个迷你后台管理系统，实现系统的登录、token验证、路由拦截、表格数据的增删改查功能。
前端UI框架选用`ant-design-vue`,安装：

```
yarn add ant-design-vue
```
一般开发项目的时候，我们不会把整个框架都引入到项目里，而是采用按需加载都方式，需要安装`babel-plugin-import `插件：
```
yarn add babel-plugin-import --dev
```
修改`.babelrc`文件，配置babel-plugin-import：
``` bash
//.babelrc

{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": [
     "transform-vue-jsx",
     "transform-runtime",
     ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]
   ]
}
```
详细修改过程可参考[vue-antd-ui官网](https://vuecomponent.github.io/ant-design-vue/docs/vue/use-with-vue-cli-cn/)
我们把需要用到的UI组件一次性导入，打开`main.js`,改成如下内容：
``` js
//main.js

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Row,Col,Form,Input,Card,Select,DatePicker,Table,message,Pagination,Modal,Radio } from 'ant-design-vue'

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Input.name, Input)
Vue.component(Card.name, Card)
Vue.component(Select.name, Select)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Form.name, Form)
Vue.component(Table.name, Table)
Vue.component(Pagination.name, Pagination)
Vue.component(Modal.name, Modal)
Vue.component(Radio.name, Radio)
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
const RadioGroup = Radio.Group
Vue.component(FormItem.name, FormItem)
Vue.component(Option.name, Option)
Vue.component(RangePicker.name, RangePicker)
Vue.component(RadioGroup.name, RadioGroup)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```
::: tip 提示
全局引入`antd`框架的时候，发现有个问题，比如`Form`这个组件，在某个组件引用的时候，还必须再单独引入一次，不然会提示`Form undefined`,如果大家碰到这个问题，就再单独引入一次;另外如果知道产生原因和解决办法的麻烦在下面留言跟我说下，谢谢了。
:::
### 登录界面
在`components`里面新建一个`Login.vue`的组件，组件内容如下：
``` vue
//Login.vue

<template>
  <div >
    <a-row>
      <a-col :span="8"></a-col>
      <a-col :span="8">
        <a-card title="欢迎登录">
          <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
              <a-form-item
                label='username'
                :labelCol="{ span: 4 }"
                :wrapperCol="{ span: 20 }"
                fieldDecoratorId="username"
                :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your username!' }]}"
                >
                <a-input />
              </a-form-item>
              <a-form-item
                label='password'
                :labelCol="{ span: 4 }"
                :wrapperCol="{ span: 20 }"
                fieldDecoratorId="password"
                :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your password!' }]}"
                >
                <a-input />
              </a-form-item>
              <a-form-item
                :wrapperCol="{ span: 16, offset: 4 }"
              >
                <a-button type='primary' htmlType='submit'>Submit</a-button>
              </a-form-item>
          </a-form>
        </a-card>
      </a-col>
      <a-col :span="8"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Login',  
  data () {
    return {
      formLayout: 'horizontal',
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }  
}
</script>

<style>
</style>
```
保存，修改`router`文件里的`index.js`文件,把`Login`组件添加到前端路由里面：
``` js
//index.js

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
```
保存，运行`yarn dev`或者`npm run dev`启动前端服务，在浏览器网址里输入`http://localhost:8080/#/login`就能看到如下界面：
![An image](./images/login.jpg)

### 后台管理界面
接下来我们创建登录成功后跳转的后台管理界面，因为只是做一个Demo，所以打算做一个简单的界面，包含数据的增删改查即可。因为在后面我们将涉及到时间的查询，到时候需要对时间格式的数据进行转换，所以要先安装一下`moment`，
```
yarn add moment
```
安装完后在`components`下新建`UserForm.vue`,内容如下
``` vue
//UserForm.vue

<script>
import { Form, Select, Radio } from 'ant-design-vue'
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const CollectionCreateForm = Form.create()(
  {
    components: {
      'a-form': Form,
      'a-form-item': FormItem,
      'a-select': Select,
      'a-option': Option,
      'a-radio': Radio,
      'a-radio-group': RadioGroup
    },

    props: ['visible', 'selectData', 'title', 'userInfo'],
    render () {
      const { visible, form, title } = this
      const { getFieldDecorator } = form
      const userInfo = this.userInfo || {state: '咸鱼一条', sex: '男', birthday: '2000-01-01', interest: '篮球'}
      const formItemLayout = {
        labelCol: {
          xs: { span: 8 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 16 },
          sm: { span: 20 }
        }
      }
      const rowObject = {
        minRows: 4, maxRows: 6
      }
      return (
        <a-modal
          visible={visible}
          title={title}
          okText='Create'
          onCancel={() => { this.$emit('cancel') }}
          onOk={() => { this.$emit('create') }}
        >
          <a-form layout='vertical'>
            <a-form-item
              {...{ props: formItemLayout }}
              label='用户名:'
            >
              {title === '用户详情' ? userInfo.username
                : getFieldDecorator('username', {
                  initialValue: userInfo.username,
                  rules: [{
                    type: 'string', message: '该用户名有效'
                  }, {
                    required: true, message: '用户名不能为空'
                  }]
                })(
                  <a-input placeholder="请输入用户名" />
                )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='性别：'
            >
              {
                title === '用户详情' ? <p> {userInfo.sex}</p>
                  : getFieldDecorator('sex', {
                    initialValue: userInfo.sex
                  })(
                    <a-radio-group>
                      <a-radio value="男">男</a-radio>
                      <a-radio value="女">女</a-radio>
                    </a-radio-group>
                  )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='状态'
            >
              { title === '用户详情' ? userInfo.state
                : getFieldDecorator('state', {
                  initialValue: userInfo.state
                })(
                  <a-select>
                    <a-option value="咸鱼一条">咸鱼一条</a-option>
                    <a-option value="风华浪子">风华浪子</a-option>
                    <a-option value="北大才子一枚">北大才子一枚</a-option>
                    <a-option value="百度FE">百度FE</a-option>
                    <a-option value="创业者">创业者</a-option>
                  </a-select>
                )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='生日：'
            >
              { title === '用户详情' ? moment(userInfo.birthday).format('YYYY-MM-DD')
                : getFieldDecorator('birthday', {
                  initialValue: moment(userInfo.birthday)
                })(
                  <a-date-picker
                    showTime
                    format="YYYY-MM-DD"
                  />
                )}
            </a-form-item>
            <a-form-item
              {...{ props: formItemLayout }}
              label='爱好' 
            >
              {title === '用户详情' ? userInfo.interest
                : getFieldDecorator('interest', {
                  initialValue: userInfo.interest
                })(
                  <a-text-area autosize={rowObject}/>
                )}
            </a-form-item>
          </a-form>
        </a-modal>
      )
    }
  }
)

export default {
  name: 'userForm',
  props: ['visible', 'userInfo', 'title'],
  methods: {
    handleCancel  () {
      const form = this.formRef.form
      this.$emit('hideForm', 'noUpdate')
      form.resetFields()
    },
    handleCreate  () {
      const form = this.formRef.form
      form.resetFields()
      this.$emit('hideForm', 'update')
    },
    saveFormRef  (formRef) {
      this.formRef = formRef
    }
  },

  render () {
    return (
      <div>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.visible}
          userInfo={this.userInfo}
          title={this.title}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
</script>
```
接着在`components`下新建`SearchForm.vue`,内容如下
``` vue
//SearchForm.vue

<script>
import { Form, Select } from 'ant-design-vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
const FormItem = Form.Item
const Option = Select.Option
const SearchForm = {
  name: 'SearchForm',
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-select': Select,
    'a-option': Option
  },
  data () {
    return {
    }
  },

  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleReset () {
      this.form.resetFields()
    }
  },

  render () {
    const { getFieldDecorator } = this.form
    return (
      <a-card>
        <a-form id='components-form-demo-normal-register' style="float:left;" layout="inline" onSubmit={this.handleSubmit}>

          <a-form-item label='生日:'>
            {getFieldDecorator('birthday', {
            })(
              <a-range-picker></a-range-picker>
            )}
          </a-form-item>
          <a-form-item label='状态:'>
            {getFieldDecorator('state', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="咸鱼一条">咸鱼一条</a-option>
                <a-option value="风华浪子">风华浪子</a-option>
                <a-option value="北大才子一枚">北大才子一枚</a-option>
                <a-option value="百度FE">百度FE</a-option>
                <a-option value="创业者">创业者</a-option>
              </a-select>
            )}
          </a-form-item>
           <a-form-item label='性别:'>
            {getFieldDecorator('sex', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="男">男</a-option>
                <a-option value="女">女</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item>
            <a-button type='primary' htmlType='submit' style="margin:0 20px">查询</a-button>
            <a-button onClick={this.handleReset} >重置</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    )
  }
}

export default Form.create()(SearchForm)
</script>
<style>
</style>
```
接着在`components`下新建`UserTable.vue`,内容如下:
``` vue
//UserTable.vue

<template>
  <div>
    <a-card>
      <a-table
        bordered
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="rowSelection"
        :pagination=false
      />
      <template>
        <a-pagination showQuickJumper :defaultCurrent="params.page" :total="total" @change="onChangePage" style="float:right;margin:10px -9px 0 0;"/>
      </template>
    </a-card>
  </div>
</template>
<script>
import dataSource from './data'
export default {
  name: 'Table',
  props: ['requestList','updataData','searchParams'],
  data () {
    return {
      dataSource: [],
      selectedRows: [],
      selectedRowKeys: [],
      pagination: {},
      columns: dataSource.columns,
      total: null,
      params: {
        page: 1,
        pageSize: 10
      },
      requestListFlag: this.requestList
    }
  },
  watch: {
    requestList () {
      this.request()
    },
    updataData () {
      this.$emit('receiveTable', this.updataData)
    },
    searchParams () {
      let _this = this
       this.$http.post('/api/searchOperator',this.searchParams)
          .then(res => {
          res.data.result.map((item, index) => {
            item.key = index
          })
          _this.dataSource = res.data.result
        })
    }
  },
  computed: {
    rowSelection () {
      let _this = this
      return {
        type: 'radio',
        onChange: (selectedRowKeys, selectedRows) => {
          _this.selectedRowKeys = selectedRowKeys
          _this.selectedRows = selectedRows
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
        onSelect: (record, selected, selectedRows, nativeEvent) => {
          this.$emit('receiveTable', record)
        }
      }
    }
  },
  methods: {
    // 动态获取数据
    request () {
     
    },
    onChangePage (pageNumber) {
      this.params.page = pageNumber
      this.request()
    }
  },
  mounted () {
    this.request()
  }
}
</script>

<style scoped>
</style>
```
最后修改`HelloWord.vue`文件，把刚才新建的三个组件添加进去，内容如下所示：
``` vue
//HelloWord.vue

<template>
  <div>
    <search-form></search-form>
    <a-card style="margin-top:-1px;margin-bottom: -1px;">
      <a-button type="primary" icon="plus" @click="handleOperator('create')" class="button">创建员工</a-button>
      <a-button icon="edit" @click="handleOperator('edit')" class="button">编辑员工</a-button>
      <a-button @click="handleOperator('detail')" class="button">员工详情</a-button>
      <a-button type="danger" icon="delete" @click="handleOperator('delete')" class="button">删除员工</a-button>
    </a-card>
       <user-table v-if="hackReset" v-on:receiveTable="receiveTable" :requestList="requestList" :updataData="updataData" :searchParams="searchParams"></user-table>
    <user-form
      :visible="visible"
      :userInfo="userInfo"
      :requestList="requestList"
      :title="title"
      v-on:hideForm="hideForm"
    >
    </user-form>
  </div>
</template>

<script>
import UserTable from './UserTable'
import UserForm from './UserForm'
import SearchForm from './SearchForm'

export default {
  name: 'User',
  components: {
    UserTable,
    UserForm,
    SearchForm
  },
  data () {
    return {
      visible: false,
      userInfo: {},
      selectItem: {},
      title: '',
      requestList: false,
      hackReset: true
    }
  },
  methods: {
    // 操作员工
    handleOperator (type) {
      let self = this.$http
      let _this = this
      let deleteId
      if (type === 'create') {
        this.title = '创建员工'
        this.visible = true
        // 因为共用一个Form表单，当用户新建员工时，即使选中了table里面的某一行数据，打开的From表单应该只有默认值，所以这里要清空userInfo；通过selectItem来判断用户有没有选中table的数据
        this.userInfo = null
      } else if (type === 'edit' || type === 'detail') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        this.title = (type === 'edit' ? '编辑用户' : '用户详情')
        this.visible = true
        deleteId = this.selectItem.id
      } else if (type === 'delete') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        Modal.confirm({
          content: '确定要删除此用户吗？',
          onOk: async () => {
            let options = {
              url: '/api/deletePersonnelTable',
              method: 'post'
            }
            let params = {
              id: deleteId
            }
            const result = await axios.getData(self, options, params)
            if (result === '删除成功') {
            // 通知UserTable更新数据
              _this.requestList = !_this.requestList
            }
          }
        })
      }
    },
    hideForm (data,params) {
      this.visible = false
         //更新完数据，通知UserTable更新数据
      if (data === 'update' && params !== undefined) {
        this.requestList = !this.requestList
        this.updataData = params
        return
      }
      if (data === 'update' && params == undefined) {
        // 创建完数据，通知UserTable更新数据
        this.requestList = !this.requestList
      }
    },
    receiveTable (data) {
      console.log(11)
      this.userInfo = data
      this.selectItem = data
    }
  }
}
</script>

<style scoped>
.button {
  float:left;
  margin-right: 10px;
}
</style>
```
全部修改完后，重新运行`yarn dev`,在浏览器地址输入`http://localhost:8080/#/`,就会看到以下画面：
![An image](./images/table.jpg)

## 搭建后端环境
### mysql
如果本地还没有配置好`mysql`的开发环境，可以去[官网](https://dev.mysql.com/downloads/mysql/)下载`MySQL Community Server`并安装，
::: tip 提示
在安装软件的过程中，要记得复制`mysql`的初始密码，安装完后再改成自己记得住的密码，如`123456`
:::
大家根据自己的电脑系统选择相应的版本下载就行，我安装的是`mac版的5.7.23`.
然后安装可视化工具来操作我们的本地数据库，我们使用官方的[workbench](https://dev.mysql.com/downloads/workbench/)，不需要破解就能免费使用，因为要配合我们的本地`mysql`版本，`workbench`的版本选择`6.3.10`。
安装完后打开`workbench`软件，连接本地数据库。默认端口是：3306，用户名：root，这里的密码不要使用初始密码，不然可能会连接不上，用更改过后的密码登录。
登录成功后，新建一个名为`Demo`的schema，在`Demo`里新建两张table，一张是`user`，一张是`management`,如下图： 

<div style="text-align: center"><img src="./images/workbench-1.jpg"></div>

`user`表的内容如下：
<div style="text-align: left;width:450px;margin:0 auto;">
<table>
  <tr>
    <th width="150px">字段</th>
    <th width="150px">类型</th>
    <th width="150px">说明</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int(自增)</td>
    <td>用户的id</td>
  </tr>
   <tr>
    <td>username</td>
    <td>VARCHAR(45)</td>
    <td>用户名字</td>
  </tr>
   <tr>
    <td>password </td>
    <td>VARCHAR(128)</td>
    <td>用户密码</td>
  </tr>
</table>
</div>

`management`表的内容如下：
<div style="text-align: left;width:450px;margin:0 auto;">
<table>
  <tr>
    <th width="150px">字段</th>
    <th width="150px">类型</th>
    <th width="150px">说明</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int(自增)</td>
    <td>用户的id</td>
  </tr>
   <tr>
    <td>username</td>
    <td>VARCHAR(45)</td>
    <td>用户名字</td>
  </tr>
   <tr>
    <td>sex </td>
    <td>VARCHAR(45)</td>
    <td>性别</td>
  </tr>
   <tr>
    <td>state </td>
    <td>VARCHAR(45)</td>
    <td>状态</td>
  </tr>
   <tr>
    <td>interest </td>
    <td>VARCHAR(45)</td>
    <td>爱好</td>
  </tr>
   <tr>
    <td>birthday </td>
    <td>DATE</td>
    <td>生日</td>
  </tr>
</table>
</div>

### Sequelize
感谢互联网的大神们带我们走过了刀耕火种的时代，有了`vue`、`react`这样优秀的MVVM框架，我们再也不用去为了操作DOM而头疼，当然，我们也不需要再用原生的`sql`语句去和数据库打交道。现在流行把关系数据库的表结构映射到对象上，也就是传说中的ORM技术-Object-Relational Mapping。在本教程里，使用为node量身打造的[Sequelize](http://docs.sequelizejs.com/)，在[github](https://github.com/sequelize/sequelize)上已经有了15000多个star了。开始安装：
```
yarn add mysql@^2.16.0    //安装mysql驱动
yarn global add sequelize-auto@^0.4.29 //自动生成schema
yarn add sequelize@^3.28.0 
```
进入server的目录，执行如下语句sequelize-auto -o "./schema" -d Demo -h 127.0.0.1 -u root -p 3306 -x XXXXX -e mysql，（其中 -o 参数后面的是输出的文件夹目录， -d 参数后面的是数据库名， -h 参数后面是数据库地址， -u 参数后面是数据库用户名， -p 参数后面是端口号， -x 参数后面是数据库密码，这个根据自己的数据库密码来！ -e 参数后面指定数据库为mysql）

然后就会在schema文件夹下自动生成两个`management.js`和`user.js`两个文件：
``` js
//management.js

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('management', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    interest: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'management'
  });
};

```
``` js
// user.js

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};

```
用`sequelize-auto`能够根据数据库里的字段自动帮我们定义表结构。生成的数据库表结构文件也都自动帮我们module.exports出来了，可以直接导入到别的文件使用。

在`server`目录下的`config`目录下我们新建一个`db.js`，用于初始化Sequelize和数据库的连接。
``` js
// db.js

const Sequelize = require('sequelize'); // 引入sequelize
// 使用url连接的形式进行连接
const Demo = new Sequelize('mysql://root:XXXX@localhost/Demo',{
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
}) 

module.exports = {
  Demo // 将Demo暴露出接口方便Model调用
}
```
:::  danger 更改密码

要将root后面的`XXXX`换成自己的本读数据库秘密

::: 

在`models`文件夹里将数据库和表结构文件连接起来。在这个文件夹下新建一个`user.js`的文件。我们先来写一个查询用户id的东西。

``` js
// models/user.js
import db from '../config/db.js' // 引入user的表结构
const userModel = '../schema/user.js'
const DemoDb = db.Demo // 引入数据-
const User = DemoDb.import(userModel) // 用sequelize的import方法引入表结构，实例化了basicTable。

const getUserById = async function (id){ 
  const userInfo = await User.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  });

  return userInfo // 返回数据
}

export default {
  getUserById  // 导出getUserById的方法，将会在controller里调用
}
```
接着我们在controllers写一个user的controller，来执行这个方法，并返回结果：
``` js
//controllers/user.js
import user from '../models/user.js'
const getUserInfo = async function (ctx, next){
  const id = ctx.params.id// 获取url里传过来的参数里的id
  const result = await user.getUserById(id);  // 通过await“同步”地返回查询结果
  ctx.response.body = result // 将请求的结果放到response的body里返回
}

export default {
  getUserInfo // 把获取用户信息的方法暴露出去 
} // 把获取用户信息的方法暴露出去 
}
```
下面需要定义路由，前端需要通过指定的路由，才能够调用这个方法。
::: 提示
为了省事，教程里的所有请求都采用post请求
:::

在`routes`文件夹下新建一个`router.js`的文件。
``` js
//routes/router.js

import KoaRouter from 'koa-router'
import UserController from './../controllers/user.js'
const router = KoaRouter()
export default function (app) {
  router.post('/user/:id', UserController.getUserInfo) //用POST请求
  app.use(router.routes())
    .use(router.allowedMethods())
}
```
把路由挂载到`Koa`上，修改`app.js`文件：
``` js
// app.js

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/routes/router'

const app = new Koa()
app.use(bodyParser())
router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

module.exports = app;

```
最后，我们在数据库里随意加一条数据用来测试：
<div style="text-align: center"><img src="./images/test.jpg"></div>

打开终端，输入node index.js，如果终端打印出`server is running at http://localhost:3000`，说明我们的API可以进行测试了！

### 测试API
API的测试工具这里选用[postman](https://www.getpostman.com/)，如果没有安装该软件的话自己去官网下载安装一下，打开软件开始测试,方法选`post`,地址`http://localhost:3000/user/1`,点击`send`测试,结果如下图：
<div style="text-align: center"><img src="./images/testApi.jpg"></div>

成功拿到数据库里的数据，说明我们的API没有问题。



## 登录功能
用户的登录验证我们采用目前比较火的`JSON-WEB-TOKEN`验证方式，相比于基于cookie或者session的登录验证jwt是真正的无状态请求，不占用服务器的资源，不存在跨域的问题，简单说说
jwt的原理:
- 用户输入账号密码登录，会把账户密码（密码用md5加密）发送给后端
- 后端验证用户的账号和密码信息，如果匹配，就返回一个TOKEN给客户端；如果验证失败，就返回验证错误信息
- 登录成功成功后，客户端会将服务器返回的TOKE保存下来（SessionStorage、LocalStorage）,之后要请求其他资源的时候，在请求头（Header）里带上这个TOKEN进行请求
- 后面服务器在收到客户端的请求时，会先验证一下TOKEN是否有效，有效则返回请求的资源，无效则返回验证错误
更详细的关于`JSON-WEB-TOKEN`的介绍，可参考[阮一峰的博客](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
通过这个TOKEN的方式，客户端和服务端之间的访问，是无状态的：也就是服务端不知道你这个用户到底还在不在线，只要你发送的请求头里的TOKEN是正确的我就给你返回你想要的资源。这样能够不占用服务端宝贵的空间资源，而且如果涉及到服务器集群，如果服务器进行维护或者迁移或者需要CDN节点的分配的话，无状态的设计显然维护成本更低。
安装`jwt`:
```
yarn add koa-jwt
```
在`models`里的`user.js`新加一个通过用户名查找用户的方法：
``` js
// models/user.js
// ......
// 前面的省略了


// 新增一个方法，通过用户名查找
const getUserByName = async function (name){
  const userInfo = await User.findOne({
    where: {
      username: name
    }
  })

  return userInfo
}

export default {
  getUserById, // 导出getUserById的方法，将会在controller里调用
  getUserByName
}
```
接着修改`controllers`里的`user.js`：
``` js
// controllers/user.js
// ......
// 前面的省略了


// 新增一个方法，通过用户名查找
const getUserAuth = async function (ctx, next){
  const data = ctx.request.body; // post过来的数据存在request.body里
  const userInfo = await user.getUserByName(data.name)

  if(userInfo != null){ // 如果查无此用户会返回null
    if(userInfo.password != data.password){
      ctx.response.body = {
        success: false, // success标志位是方便前端判断返回是正确与否
        info: '密码错误！'
      }
    }else{ // 如果密码正确
      const userToken = {
        name: userInfo.username,
        id: userInfo.id
      }
      const secret = 'vue-koa-demo'; // 指定密钥，这是之后用来判断token合法性的标志
      const token = jwt.sign(userToken,secret); // 签发token
      ctx.response.body = {
        success: true,
        token: token, // 返回token
      }
    }
  }else{
    ctx.response.body = {
      success: false,
      info: '用户不存在！' // 如果用户不存在返回用户不存在
    }
  }
}
```
::: tip 提示
`userToken`里面的内容是可以自定义的，加密后存储在token里返回给前端，前端如果想拿到token里面的内容，需要解码，安装`koa-jwt`，从`koa-jwt`导入`jwt`，然后调用`jwt.decode(token)`拿到`userToken`里面的内容。
:::
更新一下`router.js`规则：
``` js
//router.js

import KoaRouter from 'koa-router'
import UserController from './../controllers/user.js'
const router = KoaRouter()
export default function (app) {
  router.post('/user/:id', UserController.getUserInfo)
  router.post('/api/user', UserController.getUserAuth)
  app.use(router.routes())
    .use(router.allowedMethods())
}
```
后端API写完了，我们开始写前端请求

### Axios
[axios](https://github.com/axios/axios)是一个基于Promise用于浏览器和nodejs的 HTTP客户端,非常火，在github上已经有了将近50000个star了，具体的使用方法大家可以参考官网，文档写的非常详细。先安装一下`axios`:
```
yarn add axios
```
在`src\main.js`里引入axios，
``` js
// scr/main.js

// ...

import Axios from 'axios'

Vue.prototype.$http = Axios // 绑定到Vue的$http实例上

// ...
```
修改`Login.vue`,编写登录方法`handleSubmit`：
``` js
// Login.vue
// 省略前面的部分

  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          let obj = {
            name: values.username,
            password: values.password
          } 
          this.$http.post('/api/user', obj) // 将信息发送给后端
            .then((res) => { // axios返回的数据都在res.data里
              if(res.data.success){ // 如果成功
                sessionStorage.setItem('demo-token',res.data.token) // 用sessionStorage把token存下来
                message.success('登录成功')
                this.$router.push('/') // 进入后台管理页面，登录成功
              } else {
                 this.$message.error(res.data.info) // 登录失败，显示提示语
                 sessionStorage.setItem('demo-token',null) // 将token清空
                }
              }, (err) => {
              message.error('请求错误！')
              sessionStorage.setItem('demo-token',null)// 将token清空
            })
        }
      })
    }
  }  
}
</script>
```
登录框里的`username`和`password`的值，`antd`这个框架都帮我们封装在了`this.form.validateFields((err, values)`里的`values`这个参数里面了。

### bcryptjs-密码加密
以前，我们习惯前端用md5给信息加密再提交给后端，但是后来发现这种方式并不安全，因为html是明文传输，即使是加密后的数据也能被第三方截取，他们可以直接拿着加密后的信息去后端请求数据；所以前端加密并不太靠谱，最安全的方式是采用`https传输协议`，加密的步骤放在后端。为什么需要后端加密呢？假如你登录过的某个网站数据库被攻击导致数据泄露，而你的密码是以明文保存在数据库的，那么黑客就可以拿你的密码去撞库，因为我们经常好几个网站的密码都是相同的，那意味着一个网站被攻击，你其他的网站的数据也不安全了。
安装bcryptjs：
```
yarn add bcryptjs
```
在`controllers/user.js`引入`bcryptjs`
``` js
//controllers/user.js
import bcrypt from 'bcryptjs'
// 省略前面的部分

 if (userInfo != null) { // 如果查无此用户会返回null
    if (!bcrypt.compareSync(data.password, userInfo.dataValues.password)) { // 验证密码是否正确
      ctx.response.body = {
        success: false, // success标志位是方便前端判断返回是正确与否
        info: '密码错误！'
      }
    } else { // 如果密码正确
// 省略后面的部分  
```
然后我们需要把我们数据库里`123`这个明文密码bcrypt化，加密后变为：`$2a$10$x3f0Y2SNAmyAfqhKVAV.7uE7RHs3FDGuSYw.LlZhOFoyK7cjfZ.Q6`，替换数据库里的`123`.
::: tip 提示
如果我们做注册功能，用户注册成功后提交到后端的密码，需要我们用bcrypt加密后再存到数据库里,不要把密码等敏感信息用明文的方式存到数据库里
:::

### 跨域
在进行前后端联调的时候，我们还得解决跨域的问题。像现在，我们的koa服务器跑在`3000`端口，而前端是跑在`webpack`为我们提供的`8080`端口，端口不一样，存在跨域的情况，没法直接传输数据。解决跨域通信的方法常用的两种方法：
1. 服务端在请求头上加上`CORS`允许跨域，客户端即可用类似`axios`这样的工具跨域发送请求
2. 变成同域
如果使用第一种方法的话，可以借助[koajs](https://github.com//cors)这个中间件
如果前端人员也能自己解决跨域的问题，那我们就没必要麻烦后端了，这里我们选用第二种办法。
打开根目录下`config/index.js`文件，找到`dev`下的`proxyTable`，利用这个`proxyTable`这个代理工具，把外部的请求通过webpack转发给本地，也就把跨域请求变成同域请求了：
``` js
//config/index.js

前面省略
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true
        }
    },
    省略...
```
`proxyTable`的作用是：当我们在组件里发出的请求地址是/api/xxxx的时候，实际上请求的是http://localhost:3000/api/xxxx，由于webpack帮我们代理了localhost的3000端口的服务，所以我们可以把实际是跨域的请求当做是同域下的接口来调用。

然后重新启动一下前端`webpack`服务，先`ctrl+c`退出当前进程，然后`yarn  dev`或者`npm run dev`,输入网址`http://localhost:8080/#/login`,输入账号`test`,密码`123`,然后登录：
<div style="text-align: center"><img src="./images/login.gif"></div>
登录成功，我们打开浏览器的后台查看`Session Storage`:
<div style="text-align: center"><img src="./images/token.jpg"></div>
后端返回给我们的`token`也已经被保存下来了。

### 路由拦截
在前端服务刚启动的时候或者手动修改地址栏的地址改成`http://localhost:8080/`也会跳转到管理页面，这与我们的需求违背，我们需要用户登录成功后才能跳转到管理后台:
<div style="text-align: center"><img src="./images/unloginTest.gif"></div>
这里就要用到后端给我们传回来的`token`,有token就说明我们的身份是经过验证的，可以跳转到后台管理页面，否则就是非法的。我们用`vue-router`做一下前端的全局拦截，打开`src/main.js`，加入以下内容：
``` js

//src/main.js
前面省略
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')
  if (to.meta.requiresAuth) {
    if (token !== 'null' && token != null) {  //判断是否存在token
      next()
    } else {
      message.warning('请先登录')
      next('/login')
    }
  } else {
    next()
  }
})
```
打开`src/router/index.js`,改成如下内容：
``` js

//src/router/index.js
前面省略
routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {requiresAuth: true}   //表示进入HelloWorld页面是需要验证的
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
```
重启服务器`npm run dev`,或者直接清除浏览器缓存刷新网页，保证`token`被清除掉就行，会发现在未登录的情况下，无法跳转到后台管理页面，说明拦截功能生效了。
<div style="text-align: center"><img src="./images/loginTest.gif"></div>

## 实现员工的增删改查

这部分就是后台系统很常见的功能、也是主要的功能了,把这部分内容都完成了，一个后台的管理系统也基本完成的七七八八了。

### 发送Token
前面在用户登录成功后，服务器会给客户端返回一个token，那么以后客户端每次发送请求都要带上token，服务器验证通过了才会返回数据。
因为我们用了`koa-jwt`，所以只需要在每条请求头上加上`Authorization`属性，值是`Bearer {token值}`，然后让Koa在接收请求之前验证一下token即可，我们把`token`绑定到`axios`的`header`里，这样每次发送请求默认都会带上`token`了。

打开`src/main.js`，在路由跳转的钩子里加上这句：
``` js
//main.js

...
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')
  if (to.meta.requiresAuth) {
    if (token !== 'null' && token != null) {
      // 全局设定header的token验证,注意Bearer后有个空格
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token 
      next()
    } else {
      message.warning('请先登录')
      next('/login')
    }
  } else {
    next()
  }
})
```


### 获取数据

我们先在数据库里手动添加一条数据，然后再写一个获取数据库里数据的方法。

 <div style="text-align: center"><img src="./images/baobao.jpg"></div>

打开`server/models/management.js`，新增一个`getOperator`方法：

``` js
//models/management.js

import db from '../config/db.js' // 引入user的表结构
const managementModel = '../schema/management.js'
const DemoDb = db.Demo // 引入数据
const Management = DemoDb.import(managementModel) // 用sequelize的import方法引入表结构
const getOperator = async function (params) {
  const result = await personnelTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) 
  return result // 返回数据
}
  export default {
    getOperator
  }
```

通常数据库里的数据都是成千上万条的，如果一次性获取全部数据，一来是数据库读取速度慢，二来前端页面一下子渲染这么多数据也会需要较长时间，所以我们一般采用分页这种友好的方式去获取数据，这里选用里`findAndCountAll`这个方法，`offset`表示页码，`limit`表示每页的数据条数；如果要一次性获取全部的数据，可以用`findAll`这个方法。

同样需要修改`controller/management.js`:

``` js
//controllers/management.js

import management from '../models/management.js'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const getOperator = async function (ctx, next) {
  const data = ctx.request.body
  const result = await management.getOperator(data)
  if (result !== null) {
    ctx.response.body = {
      success: true,
      result: result
    }
  } else {
    ctx.response.body = {
      success: false,
      data: '获取数据出错'
    }
  }
}

 export default {
    getOperator
  }
```

更新路由`routes/router.js`:

``` js
//routes/router.js
import ManagementController from './../controllers/management.js'
import jwt from 'koa-jwt'
...

export default function (app) {
  router.post('/user/:id', UserController.getUserInfo)
  router.post('/api/user', UserController.getUserAuth)
  router.post('/api/getOperator', jwt({secret: 'vue-koa-demo'}), ManagementController.getOperator)
```

这里的`jwt({secret: 'vue-koa-demo'})`就是要求前端如果想获取`/api/getOperator`这个API的数据，就必须带上`token`，也就是之前用户登录成功后服务器返回给用户的`token`，我们在上文已经把这个`token`绑定到`axios`的请求头上了。

修改`app.js`,捕捉`jwt`验证失败的错误信息：

``` js 
//app.js
...
app.use(async function (ctx, next) {  //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: '没有权限'
      }
    } else {
      throw err
    }
  }
})

app.on('error', function (err, ctx) {
  console.log('server error', err)
})
...
```

接着我们需要在前端发起数据的请求了，这个请求应该在我们页面刚加载的时候就去服务器里请求数据，所以我们在`mounted()`方法里面调用获取数据的方法，修改`src/components/userTable.vue`:

``` js
//userTable.vue
...

 // 动态获取数据
     async request () {
      let _this = this
      let url = '/api/getOperator'
      let params = this.params
      this.$http.post(url,params)
        .then(res => {
          res.data.result.rows.map((item, index) => {
            item.key = index
          })    //给每条数据添加唯一的key值
          _this.total = res.data.result.count
          _this.dataSource = res.data.result.rows
        })
    },

 mounted () {
    this.request()
  }
...
```

然后我们刷新一下页面，会发现我们已经拿到刚才添加到数据库里面的两条数据了：

 <div style="text-align: center"><img src="./images/get.jpg"></div>



### 添加数据、更新数据、删除数据

上图中的四个按键功能`创建员工 `  `编辑员工`  `员工详情` `删除员工`在前端页面里都共用了一个model，所以打算把四个按键功能的方法也通过封装的方式写在一起。

修改`server/models/management.js`:

``` js
//models/management.js
...

// 新增数据
const createOperator = async function (data){ 
  const userInfo = await Management.create({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
      username: data.username,
      sex: data.sex,
      state: data.state,
      interest: data.interest,
      birthday: data.birthday
  });
  return userInfo // 返回数据
}

// 更新数据
const updateOperator = async function (data) {
  const result = await Management.update(
    {
      username: data.username,
      sex: data.sex,
      state: data.state,
      interest: data.interest,
      birthday: data.birthday
    },
    {
      where: {
        id: data.id
      }
    }
  )
  return result // 返回数据
}

//删除数据
const deleteOperator = async function (params) {
  const result = await Management.destroy({
    where: {
      id: params.id
    }
  })
  return result // 返回数据
}

export default {
  createOperator, // 导出createOperator的方法，将会在controller里调用
  getOperator,
  deleteOperator,
  updateOperator
}
...
```

同样需要修改`controller/management.js`:

``` js
//controller/management.js
...

//更新数据
const updateOperator = async function (ctx, next) {
  const data = ctx.request.body
  data.birthday = moment(data.birthday).format('YYYY-MM-DD')
  const result = await management.updateOperator(data)
  if (result !== null) {
    ctx.response.body = {
      success: true,
      result: result
    }
  } else {
    ctx.response.body = {
      success: false,
      result: '更新失败'
    }
  }
}

//删除数据
const deleteOperator = async function (ctx, next) {
  const data = ctx.request.body
  const result = await management.deleteOperator(data)
  if (result > 0) {
    ctx.response.body = {
      success: true,
      result: '删除成功'
    }
  } else {
    ctx.response.body = {
      success: false,
      data: '删除失败'
    }
  }
}

export default {
  createOperator, // 导出createOperator的方法，将会在router.js里调用
  getOperator,
  deleteOperator,
  updateOperator
}
```

更新路由`routes/router.js`:

```
`routes/router.js`
...

router.post('/api/createOperator', jwt({secret: 'vue-koa-demo'}), ManagementController.createOperator)
  router.post('/api/deleteOperator', jwt({secret: 'vue-koa-demo'}), ManagementController.deleteOperator)
  router.post('/api/updateOperator', jwt({secret: 'vue-koa-demo'}), ManagementController.updateOperator)
  
  ...
```

修改`userForm.vue`里面的`handleCreate`方法：

``` js
//userForm.vue
import { Form, Select, Radio, message } from 'ant-design-vue'
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
...

async handleCreate  () {
      const form = this.formRef.form
      let _this = this
      form.validateFields(async (err, values) => {
        if (err) {
          return
        }
        let params = {
          username: values.username,
          sex: values.sex,
          state: values.state,
          birthday: values.birthday,
          interest: values.interest,
          id: _this.title === '创建员工' ? null : _this.userInfo.id
        }
        let url= _this.title === '创建员工' ? '/api/createOperator' : '/api/updateOperator'
        this.$http.post(url,params)
          .then((res) => {
            if (res.data.id ) {
              message.success('创建成功')
              form.resetFields()
              _this.$emit('hideForm', 'update')
            }
            if (res.data.result.length) {
              message.success('更新成功')
              _this.$emit('hideForm', 'update', params)
            }
          })
      })
    },
```

最后修改`Helloword.vue`里面的` handleOperator`:

``` js
//Helloword.vue
import { Modal, message } from 'ant-design-vue'
import UserTable from './UserTable'
import UserForm from './UserForm'
import SearchForm from './SearchForm'
...
//操作员工
    // 操作员工
    handleOperator (type) {
      let _this = this
      let deleteId
      if (type === 'create') {
        this.title = '创建员工'
        this.visible = true
        // 因为共用一个Form表单，当用户新建员工时，即使选中了table里面的某一行数据，打开的From表单应该只有默认值，所以这里要清空userInfo；通过selectItem来判断用户有没有选中table的数据
        this.userInfo = null
      } else if (type === 'edit' || type === 'detail') {
        if (this.selectItem.id == undefined) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        this.title = (type === 'edit' ? '编辑用户' : '用户详情')
        this.visible = true
        this.userInfo = this.selectItem
      } else if (type === 'delete') {
        deleteId = this.selectItem.id
        if (this.selectItem.id  == undefined) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        Modal.confirm({
          content: '确定要删除此用户吗？',
          onOk: async () => {
            let url = '/api/deleteOperator'
            let params = {
              id: deleteId
            }
            _this.$http.post(url,params)
               .then((res) => {
                  if (res.data.result === '删除成功') {
                    message.success('删除成功')
                     this.requestList= !_this.requestList
                     this.selectItem.id = undefined
                     this.hackReset = false
                     this.$nextTick(() => {
                     this.hackReset = true
                     })  
                  }
               })
           }
        })
      }
    },
```

好了，下面让我们来看下效果：

 <div style="text-align: center"><img src="./images/operator.gif"></div>

 OK！没问题。

如果看了代码，会发现其实操作数据库没有那么难(感谢大神们🙏)，增、删、改、查分别都有对应的方法可以调用

### 数据查找

最后，我们做一下按条件查找的功能，这个教程就接近尾声了。其实做到这里，整个前后端交互逻辑，大家应该都已经比较清楚了。`router`作为前端的访问路径，`controllers`是前后端数据交互的缓冲层，`model`是后端访问数据库的方法。

修改`server/models/management.js`,新增`searchOperator`方法：

``` js
//models/management.js`
...
// 按设置条件进行查找
const searchOperator = async function (params) {
  params.state === '全部' ? params.state = ['咸鱼一条', '风华浪子', '北大才子一枚', '百度FE', '创业者'] : params.state = [params.state]
  params.sex === '全部' ? params.sex = ['男', '女'] : params.sex = [params.sex]
  const result = await Management.findAll({
    where: {
      state: {
        $in: params.state
      },
      sex: {
        $in: params.sex
      },
      birthday: {
        $between: [params.birthday[0], params.birthday[1]]
      }
    }
  }) 
  return result // 返回数据
}
...
```

修改`server/controllers/management.js`,新增`searchOperator`方法：

``` js
controllers/management.js
...
const searchOperator = async function (ctx, next) {
  const data = ctx.request.body
  console.log(data)
  data.birthday[0] = moment(data.birthday[0]).format('YYYY-MM-DD')
  data.birthday[1] = moment(data.birthday[1]).format('YYYY-MM-DD')
  const result = await management.searchOperator(data)
  if (result !== null) {
    ctx.response.body = {
      success: true,
      result: result
    }
  } else {
    ctx.response.body = {
      success: false,
      data: '获取数据出错'
    }
  }
}
...
```

更新`routes/router.js`:

``` js
// router.js`
...
router.post('/api/searchOperator', jwt({secret: 'vue-koa-demo'}), ManagementController.searchOperator)
...
```

更改前端页面`SearchFrom.vue`里面的`handleSubmit`方法：

``` js
handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // 如果用户没有选择时间段，就给一个大范围的时间段搜索范围
          if (!values.birthday) {
            values.birthday = []
            values.birthday[0] = moment(new Date(1900, 0, 1)).format('YYYY-MM-DD')
            values.birthday[1] = moment(new Date(2100, 0, 1,)).format('YYYY-MM-DD')
          }
          this.$emit('searchOperator', values)
        }
      })
    },
```

我们来看下最终的效果：

<div style="text-align: center"><img src="./images/search.gif"></div>

大功告成。



## 项目部署

到这里，说明我们的项目在开发环境跑起来是没问题了，但是如果我们想让别人也能访问咱们的网站，就需要部署到服务器上，也就是所谓的生产环境。

我们要做的就是把`Vue`和`Koa`结合起来变成一个完整的项目,将Vue的静态文件交给Koa“托管”，所有访问前端的请求全部走Koa端，包括静态文件资源的请求，也走Koa端，把Koa作为一个Vue项目的静态资源服务器，这样的话也就不存在跨域的问题了（相当于，之前开发模式是webpack开启了一个服务器托管了Vue的资源和请求，现在生产模式下改成Koa托管Vue的资源和请求）。

### webpack打包

运行`yarn build`或者`npm run build`,打包前端文件，打包 完成后会在根目录生成一个`dist`的文件夹，打包出来`dist`文件夹有`6.5MB`，这么大显然不能直接用，我们要优化下。

找到根目录下的`config/index.js`，把`productionSourceMap: true`这句话改成`productionSourceMap: false`，这句话到意思是取消输出`map`文件；把` productionGzip: false,`改成` productionGzip: true,`这句话到意思是开启`gzip`压缩，我们再安装一个压缩文件的插件：`yarn add compression-webpack-plugin -D`

最后后再执行`npm run build --report`，这时候浏览器会打开一个新的窗口`http://127.0.0.1:8888/`,在这里，我们可以很方便的看到打包完文件的体积大小，以及各种第三方库、插件详细打包信息，后期如果还想优化，就可以参照这些信息对一些体积较大的文件进行优化。

<div style="text-align: center"><img src="./images/build.gif"></div>



如果开启了`gzip`后，文件大小也就300多KB,还能接受。

### koa托管静态资源

这里需要借助`koa-static`这个中间件，我们前面已经安装过了，如果没安装的自己再安装一遍。

打开`app.js`，引入两个新依赖，其中`path`是nodejs原生自带：

```j s
// app.js
import serve from 'koa-static'
import path from 'path'
// .... 

router(app)
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

// ...
```

::: tip 提示

`注意app.use(serve(path.resolve('dist')))`这句话要放在`router(app)`的后面，koa的运行机制是谁先被use，谁的规则就先执行，如果我们放到router(app)前面，那么每次发送API请求的时候，都会先给我们返回一个完整的页面，再返回数据

:::

保存，重新运行`node index.js`，看到`server is running at http://localhost:3000`，打开`http://localhost:3000`,会发现自动跳转到登录页面：

<div style="text-align: center"><img src="./images/koaLogin.jpg"></div>

剩下的，如果自己有服务器，把代码拷贝一份到服务器上，在服务器里执行`node index.js`开启服务，别人通过访问你的服务器ip或者服务器域名，加上3000端口号，就能访问到你的项目了，比如我的[项目地址](http://132.232.73.32:3000/)是`http://132.232.73.32:3000/`.



## 写在最后

本来以为两天就能写完的教程，没想到写了一个多星期，因为时间关系，还有很多东西没写，比如`vue`、`ant-design-vue`的使用，好在这些东西都不算很难，官网给的文档也很详细，大家如果有兴趣可以自己去了解了解，有问题的话可以下方给我评论。另外如果想自己独立做一个完整的后台管理系统，可以学习下慕课网河畔一角老师的[React全家桶+AntD 
共享单车后台管理系统开发](https://coding.imooc.com/class/236.html)课程，非常适合新手，我自己做的管理后台很多代码封装、模块化、代码结构等都参考了老师的课程。

虽然这真的只是一个很简单的小项目，但所谓`麻雀虽小，五脏俱全`，我们毕竟是完成了一个从前端到后端，从本地到服务器的完整项目。借助`node `以及`koa`这样小巧而优秀的框架，再稍微了解一点数据结构的知识，我们前端开发人员也能独立的作出一个完整的网站出来，想想真的是太棒了。

最后放上完整项目的Github[地址](https://github.com/GongJS/vue-antd-management)，以及本Demo的github[地址](https://github.com/GongJS/koa-demo)如果这个项目对你有帮助，希望大家可以fork，给我提建议，如果再有时间，可以点个Star那就更好啦~