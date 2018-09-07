---
title: 作用域
comments: true
---
# 作用域

JS无块级作用域，只有函数作用域和全局作用域

``` js
//无块级作用域
if（true）{
    var name = 'zhangshan'
} 
console.log(name)  //'zhangshan'

//函数和全局作用域
var a = 100
function fn () {
    var a = 200
    console.log('fn',a)
}
console.log('global',a) // 'global', 100
fn()  // 'fn', 200

```

## 执行上下文

- 范围：一段`<script>`或者一个函数
- 全局：变量定义、函数声明 （一段`<script>`）
- 函数：变量定义、函数声明、this、arguments  (函数)

``` js
//变量提升
console.log(a) //undefined
var a = 100

//函数声明
fn('zhangshan')  //'zhangshan'  20
function fn(name) {
    age = 20
    console.log(name, age)
    var age
}

//函数表达式
f1() // Uncaught TypeError: f1 is not a function
var f1 = function () {
    console.log(2)
}
```

## this

- 在执行时才能确认值，定义时无法确认
``` js
  //作为构造函数执行
  function Foo () {
      this.name = name
  }
  var f = new Foo('zhangshan')
  
  //作为对象执行
  var obj = {
      name: 'A',
      printName: function () {
          console.log(this.name)
      }
  }
  obj.printName()  // 'A';  this === obj
  
  //作为普通函数执行
  function fun () {
      console.log(this)
  }
  fun()  // this === window
  
  //call apply bind
  function fn1(name,age) {
      alert(name)
      console.log(this)
  }
  fn1.call({x:100,},'zhangshan',20) // {x:100}; this === {x:100}
  
  function fn2(name,age) {
      alert(name)
      console.log(this)
  }
  fn2.applay({x:100,},['zhangshan',20]) // {x:100}; this === {x:100}
  
  function fn3(name,age) {
      alert(name)
      console.log(this)
  }.bind({y:200})
  fn3.call('zhangshan',20)  // {y:200}; this === {y:200} 
  
```


## 闭包

- 函数作为返回值
- 函数作为参数传递

``` js
//函数作为返回值
function F1() {
    var a = 100
      
    //返回一个函数（函数作为返回值）
    return function () {
        console.log(a)  //a作为自由变量，去父作用域寻找
    }
}
  
  //f1得到一个函数
  var f1 = F1()
  var a = 200
  f1() // 100
  
  //函数作为参数传递
function F1() {
    var a = 100
    return function () {
        console.log(a)
    }
  }
  var f1 = F1()
  function F2(fn) {
    var a = 200
    fn()
  }
  F2(f1) //100
  ```

## 创建10个`<a>`标签 点击的时候弹出对应的序号

``` js
//错误写法
var i,a
for (i=0; i<10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click',function (e) {
        e.preventDefault()
        alert(i)
    })
 document.body.appendChild(a)   
}

//正确写法
var i
for (i=0; i<10; i++) {
    (function (i) {
        var a = document.createElement('a')
        a.innerHTML = i + '<br>'
        a.addEventListener('click', function(e) {
            e.preventDefault()
            alert(i)
        })
        document.body.appendChild(a)
    })(i)
}
```