var obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2,  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

var objCild = Object.assign({},obj);

console.log();

// console.log(obj.foo);

var a = {a: 123};

var b = {b: 345};

// b.__proto__ = Object.assign(Object.prototype, a);

// console.log(b.a);// 123

var m = { a: 10, b: 20 }
var n = m;
n.a = 15;

console.log(m.a

);




