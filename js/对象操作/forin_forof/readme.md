# for　in　和 for of 的差别

1. for in 循环key属性，通常用来循环普通对象。

    for (var key in obj)
    {
        var val = obj[key];
    }

**若使用for in 来循环数组，那么将会对数组对象的属性进行输出。**

    ary = ['a','b'];
    ary.name = 'array';
    for (var key in ary)
    {
        console.log(key); // 0,1,name
    }

2. for of　循环值，通常用来循环数组，这是ES6的新特征，用来修复for in 的不足。

    for (var v of ary)
    {
        console.log(v);// a,b
    }

for of不能适用于普通对象。若要使用，需要配合Object.keys。