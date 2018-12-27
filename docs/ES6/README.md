---
title: var let 及 const 区别
comments: true
---

### var

```js
console.log(a) //undefined
var a = 1

// 以上代码等价于
var a
console.log(a) // undefined
a = 1
```

```js
var a = 10
var a
console.log(a) // 10

// 以上代码等价于
var a
var a
a = 10
console.log(a) // 10
```

var 声明的变量会被提升到作用域的顶部，然后才赋值;`var a = 1`要当成`var a; a = 1`两个表达式来看。

```js
console.log(a) // f a() {}
function a() {}
var a = 1
console.log(a) // 1
```

从上面例子也可以看出，函数也会被提升，并且优先级是高于变量的，会覆盖同名变量。

### let、const

```js
var a = 1
let b = 1
const c = 1
console.log(window.a) // 1
console.log(window.b) // undefined
console.log(window.c) // undefined
```

在全局作用域下使用`let`和`const`声明变量，变量并不会被挂载到`window`上，这一点就和`var`有区别。

```js
function test() {
  console.log(a)
  let a = 1
}
test() // uncaught ReferenceError: a is not defined
```

不同于`var`，如果在用`let`、`const`声明的变量之前使用该变量，会报错；在`let const`声明的变量上方出现了`暂时性死区`，在该区域内使用该变量都会报错。
