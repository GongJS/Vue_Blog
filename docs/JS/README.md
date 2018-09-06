---
sidebar: auto
title: JS学习笔记
comments: true
---
##  JS变量类型

按存储方式区分：JS变量类型分为`值类型`和`引用类型`

### 值类型

`字符串（string`）、`数值（number）`、`布尔值（boolean）`、`undefined`

1. 占用空间固定，保存在栈中（当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，`基础变量的值是存储在栈中`，而引用变量存储在栈中的是`指向堆中的数组或者对象的地址`，这就是为何修改引用类型总会影响到其他指向这个地址的引用变量。）<div style="text-align: center"><img src="./images/zhileixing.jpg"></div>
2. 保存与复制的是值本身（深拷贝）
3. 可以使用typeof检测的数据类型（包括function）
4. 基本类型数据是值类型
```js
1. var a = 100
2. var b = a
3. a = 200
4. console.log(b) // 100
```

### 引用类型

`对象（object）`、`数组（array）`、`函数（function）`

1. 占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象`依然不会被销毁`，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）<div style="text-align: center"><img src="./images/yinyong.jpg"></div>
2. 保存与复制的是指向对象的一个指针（浅拷贝）
3.  可以使用instanceof检测的数据类型 （也可以用来判断一个函数是否是另一个变量的构造函数）
4. 使用new()方法构造出的对象是引用型
```js
var a = {age:20}
var b = a
b.age = 21
console.log(a.age) // 21

//深拷贝   借用JSON对象的parse和stringify
var c = {age:20}
var d = JSON.parse(JSON.stringify(c))
d.age=30
console.log(c)  // {age:20}
console.log(d)  // {age:30}
```

### typeof 运算符

`typeof`只能用来判断`值类型`和`引用类型`中的`function`

```js
1. typeof undefined // undefined
2. typeof 'abc' // string
3. typeof 123 // number
4. typeof true // boolean
5. // typeof 区分不出来引用类型（除了函数）
6. typeof {} // object
7. typeof [] // object
8. typeof null // object
9. typeof console.log //function
```

### instanceof 运算符

 ```js
var a = [1,2,3]
console.log(a instanceof Array) //true
var b = {age: 20}
console.log(b instanceof Object) //true
function Foo() {
}
var f = new Foo()
console.log(f instanceof Foo) //true
 ```

`f instanceof Foo`的判断逻辑是：

`f`的`__proto__`一层一层往上，能否对应到Foo.prototype，再试着判断`f instanceof Foo`



### 变量计算-强制类型转换

1. 字符串拼接

```js
   var a = 100 + 10 //110
   var b = 100 + '10' // '10010'
```

2. == 运算符

```js 
   100 == '100' //true
   0 == '' //true
   null == undefined //true
```

3. if语句

```js
   var a = true
   if (a) {
      console.log(a)   //true
   }
   var b = 100
   if (b) {
       console.log(b)  //100
   }
   var c = ''
   if (c) {
       console.log(100)  // 进不去if里面
   }
```

4. 逻辑运算

```js
   console.log(100 && 0) // 0
   console.log('' || 'abc') //'abc'
   console.log(!window.abc) // true
   
   //判断一个变量会被当作true还是false
   var a = 100
   console.log(!!a)  //true
```


### 如何理解JSON？

JSON只不过是一个JS对象而已

```js
JSON.string({a:10,b:20})   //JSON转换成字符串 
JSOn.parse('{a:10,b:20}')  //字符串转换成JSON
```

### 何时用 ===  何时用 ==

```js
if(obj.a == null) {
    //这里相当于obj.a === null || obj.a === undefined 的简写形式
    //jquery源码中推荐的写法
}
```



## 作用域

无块级作用域，只有函数作用域和全局作用域

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

### 执行上下文

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

### this

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


  ### 闭包

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
  ### 创建10个`<a>`标签 点击的时候弹出对应的序号

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



## 原型和原型链

### 构造函数

`new`一个对象的过程:

1. 创建一个新的对象
2. this指向这个新对象
3. 执行代码，即对this赋值
4. 返回this

```js
function Foo(name, age) {
    this.name = name
    this.age = age
    this.class = "class-1"
    //return this   //默认有这一行
}
var f = new Foo('zhangshan',20)
var f1 = new Foo('lisi',22)  //创建多个对象
```

`new`一个对象的过程

### 构造函数-扩展

1. var a = {} 其实是var a = new Object()的语法糖
2. var a = [] 其实是var a = new Arrayt()的语法糖  //推荐var a={},a=[]这种写法，可读性高，执行效率高
3. function Foo() {...}  其实是var Foo = new Function(...)
4. 使用instanceof判断一个函数是否是另一个变量的构造函数

### 原型规则

1. 所有的引用类型（数组、对象、函数），都有一个`__proto__（隐式原型）`属性,属性值是一个普通的对象

2. 所有的函数，都有一个`prototype（显式原型）`属性，属性值也是一个普通的对象(对象里面的值是一个构造函数)

3. 所有的引用类型（数组、对象、函数），都有一个`__proto__（隐式原型）`属性值指向它的构造函数的`prototype`属性值
4. 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么回去它的`__proto__`(即它的构造函数的prototype)中寻找

```js
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
var fn = function () {}
fn.a = 100;

console.log(obj.__proto__) //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}  
console.log(arr.obj.__proto__) //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(fn.obj.__proto__) //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(fn.prototype)  // {constructor: ƒ}

console.log(obj.__proto__ === Object.prototype) //true
```

### 原型链

```js
//构造函数
function Foo(name, age) {
    this.name = name
}
Foo.prototype.alertName = function () {
    alert(this.name)
}
//创建实例
var f = new Foo('zhangshan')
f.printName = function () {
    console.log(this.name)
}
//测试
f.printName()  //'zhangshan'
f.alertName()  //'zhangshan'
f.toString() //要去f.__proto__.proto__中查找

//循环对象自身的属性
var item
for (item in f) {
    //高级浏览器已经在for in中屏蔽了来自原型的属性
    // 但是这里建议大家还是加上这个判断，保证程序的健壮性
    if (f.hasOwnProperty(item)) {
        console.log(item)
    }
}
```

<div style="text-align: center"><img src="./images/yuanxing.jpg"></div>

### 原型链继承-封装DOM查询例子

```js
function Elem(id) {
    this.elem = document.getElementById(id)
}

Elem.prototype.html = function (val) {
    var elem = this.elem
    if(val) {
        elem.innerHtml = val
        return this  //链式操作
    } else {
        return elem.innerHtml
    }
}

Elem.prototype.on = function (type, fn) {
    var elem = this.elem
    elem.addEventListener(type, fn)
    return this //链式操作
}
var div1 = new Elem('div1')
// console.log(div1.html())
div1.html('<p>hello</p>').on('click', function () {
    alert('clicked')
}).html('<p>javascript</P>')
```







