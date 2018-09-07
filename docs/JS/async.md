---
title: 异步
comments: true
---
# 异步-单线程

## 什么是异步？单线程？

- 执行第一行，打印100
- 执行setTimeout后，传入setTimeout的函数会被暂存起来，不会立即执行（单线程的特点，不能同时干两件事）
- 执行最后一行，打印300
- 待所有程序执行完后，处于空闲状态时，会立马查看有没有暂存起来的要执行
- 发现暂存起来的setTimeout中的函数后，无需等待，立即执行

```js
console.log(100)
setTimeout(function () {
    console.log(200)
},1000)
console.log(300)
//100,300,1秒后再打印200
```

## 对比同步

- 执行第一行，打印100
- 执行第二行时，需要等待用户确认，才能继续执行后面的代码（同步的特点，会阻塞代码执行）
- 用户点击确认，打印200
- 执行第三行，打印300

```js
console.log(100)
alert(200)
console.log(300)
//100,弹出200，用户确认之后再打印300
```

## 同步和异步的区别是什么？

- 同步会阻塞代码执行，而异步不会
- alert是同步，setTimeout是异步

### 一个关于setTimeout的笔试题

  ```js
  console.log(1)
  setTimeout(function () {
      console.log(2)
  },0)
  console.log(3)
  setTimeout(function () {
      console.log(4)
  },1000)
  console.log(5)
  
  //1 3 5 2 4
  ```

## 何时需要异步

- 在可能发生等待的情况

- 等待过程中不能像`alert`一样阻塞程序运行

- 因此，所有的“等待情况”都需要异步

### 前端使用异步的场景

- 定时任务：setTimeout, setInverval
- 网络请求：ajax请求，动态`<img>`加载
- 事件绑定

```js
//ajax请求代码示例
console.log('start')
@.get('./data.json', function () {
    console.log(data)
})
console.log('end')   //'start' , 'end',  data

//img加载示例
console.log('start')
var img = document.createElement('img')
img.onload = function () {
    console.log('loaded')
}
img.src = '/xxx.png'
console.log('end')   // 'start', 'end', 'loaded'

//事件绑定示例
console.log('start')
document.getElementById('btn1').addEventListener('click', function() {
    alert('clicked')
})
console.log('end')    // 'start', 'end', 'clicked'
```


