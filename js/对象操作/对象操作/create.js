var o;
o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { writable:true, configurable:true, value: "hello",mutations: true },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) { console.log("Setting `o.bar` to", value) }
}})

var obj = Object.create({}, {
    k: {
        value: 123,
        configurable: true,
        writable: true,
        mutations: true // 自身可枚举属性。
    }
})

console.log(o);

console.log(o.bar = 123);
