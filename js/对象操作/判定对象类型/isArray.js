
// 标准方法
function isAry(obj)
{
    if (!Array.isArray)
    {
        console.log('user Object.prototype.toString.call');

        return Object.prototype.toString.call(obj) == '[object Array]';
    }
    else
    {
        console.log('use Array.isArray');

        return Array.isArray(obj);
    }
}

var ary = [1,2,3];
console.log(isAry(ary));

// 其他方法
// 1.instanceof
// ary instanceof Array 运算符用来检测 Array.prototype 是否存在于参数 ary 的原型链上。如果在,那么 ary可以看作Array的实例，即instanceof(...的实例)。
// console.log('/////instanceof////');
// console.log(ary instanceof Array);

// 局限:
// 不同的window窗口会有不同的window对象
// window.Array.prototype !== window.frames[0].Array.prototype
// 所以当你想要引用另一个窗口的数组变量时，使用instanceof Array结果就会为false。

//
// 2. 原型链
// console.log('/////__proto__////');
// console.log(ary.__proto__.constructor == Array);
// console.log(ary.constructor == Array);
// 局限性:
// 存在浏览器兼容性

// 2. Array.isArray()
// 局限性:
// 存在浏览器兼容性

