//                                  -->原型链继承  |
//        --> 不使用Object.create　--|             | --> 组合继承
//        |                         -->构造函数继承 |       |
// 继承 --|                                           优化 ｜
//        |                        --> 原生式继承  |       v     改造
//        --> 使用Object.create　 --|             | --> 寄生组合 ----- > ES6 Class extends
//                                 --> 寄生式继承  |

// 组合继承

// 有一个缺点： 实例parent时，赋值一次name，而实例化child后，又赋值一次name，造成多余的性能损耗。

// function parent() {
//   var name = "parent";
//   this.name = name;
// }
// parent.sayname = function() {};

// function child() {
//   parent.call(this);
//   this.name = "child";
// }
// child.prototype = new parent();
// child.prototype.constructor = child; // 矫正child的__proto__

// 原型式继承

// var child = Object.create(parent);
// // 原理
// Object.create = function create (o,another){
//     function Fn(){}
//     Fn.prototype = o;
//     // ...对another的处理
//     return new Fn();
// }

// 寄生组合继承
// function parasitismPrototype(child, parent_proto) {
//   function Fn() {}
//   Fn.prototype = parent_pro;
//   var obj = new Fn();

//   child.prototype = obj;
//   child.constructor = Fn;
//   return child;
// }

// function parent(name) {
//   this.name = name || "leo";
//   this.sayname = function() {
//     console.log(this.name);
//   };
// }
// parent.prototype.setAge = function(age) {
//   this.age = age || 22;
//   console.log(this.age);

//   return this.age;
// };

// function child() {
//   parent.call(this);
//   this.name = "leo's child";
// }

// parasitismPrototype(child, parent.prototype);

// ES6继承

// class parent {
//   constructor(name) {
//     this.name = name || "leo";
//   }
//   sayname() {
//     console.log(this.name);
//   }
// }

// class child extends parent {
//   constructor() {
//     super("leo's child");
//   }
// }

// 实现原理
class parent {
  constructor() {
    this.name = "leo";
  }
  sayname() {
    console.log(this.name);
  }
}
class child {
  constructor() {}
}

//// extends　语法糖　原理
Object.setPrototypeOf = function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
};
// child的实例继承parent的实例
Object.setPrototypeOf(child.prototype, parent.prototype);
// child 继承 parent的静态属性
Object.setPrototypeOf(child, parent);

var name = new child();

name.sayname(); // 输出undefined而不是leo，所以这也是为什么要进行super()的原因
