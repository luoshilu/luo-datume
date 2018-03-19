# 对象操作

## Object.assign

1. 可以用作对象的复制

    var obj = Object.create(Object.prototype, {
        bar: {
            value: 2  // bar 是个不可枚举属性。
        },
        baz: {
            value: 3,
            enumerable: true  // baz 是个自身可枚举属性。
        }
    })

注:
1. 继承属性和不可枚举属性是不能拷贝的

2. 原始类型会被包装为 object
3. 异常会打断接下来的拷贝任务

2. 可以用作对象的合并


## Object.keys

获取对象中的key值，返回数组

## Object.is

用来判断两个值是否为同一个

    Object.is('aa','aa');
    Object.is('foo', 'bar');     // false
    Object.is([], []);           // false

    var test = { a: 1 };
    Object.is(test, test);       // true

    Object.is(null, null);       // true

    // 特例
    Object.is(0, -0);            // false
    Object.is(-0, -0);           // true
    Object.is(NaN, 0/0);         // true

## Object.create