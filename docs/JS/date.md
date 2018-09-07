---
title: 日期/随机数
comments: true
---
# 日期

## 日期常用API
```js
Date.now()  //获取当前时间毫秒数   1536285836755
var dt = new Date()
dt.getTime() //获取毫秒数   1536285836755
dt.getFullYear() //年   2018
dt.getMonth()  //月 （0-11）
dt.getDate()  //日 （1-31）
dt.getHours() //小时 （0-23）
dt.getMinutes() //分钟（0-59）
dt.getSeconds() //秒 （0-59）
```

## 获取`xxxx-xx-xx`格式的日期

```js
function formatDate(dt) {
    if(!dt) {
        dt = new Date()
    }
    var year = dt.getFullYear()
    var month = dt.getMonth() + 1
    var date = dt.getDate()
    if (month < 10) {
        //强制类型转换
        month = '0' + month
    }
    if(date < 10) {
        //强制类型转换
        date = '0' + date
    }
    //强制类型转换
    return year + '-' + month + '-' + date
}
var dt = new Date()
var formatDate = formatDate(dt)
console.log(formatDate)    //'2018-09-07'
```


## Math

- 获取随机数Math.random()

- 获取随机数，要求长度是一致的字符串格式

  ``` js
  var random = Math.random()
  var random = random + '0000000000' //后面加上10个0
  var random = random.slice(0,10)
  console.log(random)   //'0.01971141'
  ```