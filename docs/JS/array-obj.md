---
title: 数组/对象
comments: true
---
# 数组和对象常用方法汇总

## 数组API

- forEach 遍历所有元素
- every 判断所有元素是否都符合条件
- some 判断是否有至少一个元素符合条件
- sort 排序
- map 对元素重新组装，生成新数组
- filter 过滤符合条件的元素

```js
// forEach
var arr = [1,2,3]
arr.forEach(function (item, index) {
    //遍历数组的所有元素
    console.log(index, item)      // 0 1 
                                     1 2 
                                     2 3
})

//every
var arr = [1,2,3]
var result = arr.every(function (item, index) {
    //用来判断所有的数组元素，都满足一个条件
    if(item < 4) {
        return true
    }
})
console.log(result) //true

//some
var arr = [1,2,3]
var result = arr.some(function (item, index) {
    //用来判断所有的数组元素，都满足一个条件
    if(item < 2) {
        return true
    }
})
console.log(result) //true

//sort
var arr = [1,4,5,2,3]
var arr2 = arr.sort(function(a,b) {
    //从小到大排序
    return a - b
    
    //从大到小排序
    //return b - a
})
console.log(arr2)  //[1,2,3,4,5]

//map 
var arr = [1,2,3,4,5]
var arr2 = arr.sort(function(item, index) {
    //将元素重新组装，并返回
    return '<b>' + item + '</b>'
}) 
console.log(arr2)  //[1,2,3,4,5]

//filter
var arr = [1,2,3]
var arr2 = arr.filter(function (item) {
   if(item >= 2) {
      return true
   }
})
console.log(arr2)
console.log(arr2)  //[2,3]
```



## 对象API

```js
var obj = {
    x: 100,
    y: 200,
    z: 300
}
for (key in obj) {
    // 只获取对象自身的属性，而不是继承来的属性
    if(obj.hasOwnProperty(key)) {
        console.log(key, obj[key])  // x 100
                                       y 200
                                       z 300
    }
}
```



## 一个能遍历对象和数组的forEach函数

```js
function forEach(obj, fn) {
    var key
    if (obj instanceof Array) {
        //判断是不是数组
        obj.forEach(function(item, index) {
            //注意，这里参数的顺序换了，为了和对象的遍历格式一致
            fn(index, item)
        })
    } else {
        //不是数组就是对象
        for (key in obj) {
            fn(key, obj[key])
        }
    }
}

var arr = [1,2,3]
forEach(arr,function(index,item) {
    console.log(index,item)
})

var obj = {x:100, y:200}
forEach(obj, function(key,value) {
    console.log(key,value)
})
```

