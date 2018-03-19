# 浅拷贝

    var m = { a: 10, b: 20 }
    var n = m;
    n.a = 15;
    console.log(m.a); // 15
m.a会输出15,这是因为，对象复制只是复制的对象的引用。

浅拷贝的方法:

1. 对象赋值
2. 使用for in时(对象只有一层则是深拷贝)
3. Object.assign(对象只有一层则是深拷贝)

# 深拷贝

    var m = { a: 10, b: 20 }
    var n = {a:m.a,b:m.b};
    n.a = 15;
    console.log(m.a); // 10

1. 手动赋值
2. 对象只有一层时使用for in 或者 Object.assign
3. 转成json再转回来

    var obj1 = { body: { a: 10 } };
    var obj2 = JSON.parse(JSON.stringify(obj1));

4. 递归拷贝
5. 使用Object.create()方法
6. jq的$.extend
7. lodash的_.cloneDeep