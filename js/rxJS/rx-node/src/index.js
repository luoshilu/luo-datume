// import num from './rxExample.js'

import Rx from 'rxjs/Rx'

// import $ from 'jquery'

// let n = Rx.Observable.fromEvent($('#num'), 'keyup');
// let min = Rx.Observable.fromEvent($('#min'), 'keyup')
// let max = Rx.Observable.fromEvent($('#max'), 'keyup').

// let mg = Rx.Observable.combineLatest(n, min, max)
// mg.map(_ => _.map(e => e.target.value)).subscribe(
//   res => {
//     $('#input').text(num(res))
//   }
// )

// var observable1 = Rx.Observable.interval(400);
// var observable2 = Rx.Observable.interval(300);
// var subscription = observable1.subscribe(x => console.log('first: ' + x));
// var childSubscription = observable2.subscribe(x => console.log('second: ' + x));
// subscription.add(childSubscription);　// 将childSubscription作为subscription的子订阅

// setTimeout(() => {
//     // Unsubscribes BOTH subscription and childSubscription
//     subscription.unsubscribe();
// }, 3000);

// Subject是允许值被多播到多个观察者的一种特殊的Observable
// var subject = new Rx.Subject();
// subject.subscribe({
//     next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
// });
// // subject.next(2);
// // subject.next(3);

// var observalbe = Rx.Observable.from([1,2]);
// observalbe.subscribe(subject);


// var source = Rx.Observable.from([1,2,3]);
// var subject = new Rx.Subject();

// var refCounted = source.multicast(subject).refCount();

// var sub1 = refCounted.subscribe((v)=>{console.log(v);});

// var sub2 = refCounted.subscribe(v=>{console.log(v);})

// setTimeout(()=>{sub1.unsubscribe()},2000);
// setTimeout(()=>{sub2.unsubscribe()},3000);

// var multicaseted = source.multicast(subject)

// multicaseted.subscribe({
//   next: (v) => console.log('observerA:' + v)
// });
// multicaseted.subscribe({
//   next: (v) => console.log('observerB:' + v)
// });

// multicaseted.connect();


// var subject = new Rx.BehaviorSubject(0); // 0 is the initial value
//     subject.subscribe({
//         next: (v) => console.log('observerA: ' + v)
//     });
//     subject.next(1);
//     subject.next(2);
//     subject.subscribe({
//         next: (v) => console.log('observerB: ' + v)
//     });
//     subject.next(3);


// 总结
// 1.什么是可观察对象，它和函数，事件，Promise, Iterator有什么区别？

// 两个概念：　数据的拉和推
// 拉：　数据的消费者决定何时从生产者那里获取数据，生产者不能意识到何时数据被发送给消费者
// 推：　数据的生产者决定何时将数据发送给消费者，消费者不能意识到何时获取数据

// 区别1: 推拉的体系　不同
// pull拉: function, Iterator
// pull推: Promise, Observable

// 区别二：　返回单值或多值
// single: function, Promise
// multiple: Iterator, Observable

// 区别三：　同步与异步
// 同步： funtion, Iterator
// 同/异步: Promise, Observable，事件

//　区别四：　惰性求值
// 惰性： function, Iterator, Observable

// 事件驱动，是监听与被监听的关系，这另一种体系。与Observable的订阅机制相似但其它完全是不同的。
// 简单来说，可观察对象，是更一般的函数。是一个零参的函数，但是允许返回多个值使得其更加一般化

// 创建一个可观察对象

// var observable = Rx.Observable.create(function(observer){observer.next('hello')}); // create方法 => function(subscribe){return new Observable(subscribe)}
// //.....prototype.next = function (value) {
// // var result = tryCatch(this.observer.onNext).call(this.observer, value);
// // if (result === errorObj) {...}
// //};
// observable.subscribe({            obserbable.subscribe(
//   next: ()=>{},            ==>         function(){},
//   error: ()=>{},                       function(){},
//   complete: ()=>{}                     function(){})
// })

// observable 是可观察者，subscribe的参数是观察者。即观察者对象通过subscribe来订阅可观察者，当可观察者产生next,error,或者compalete时，观察者将会接受到响应。

// Subject

// 允许多播到多个观察者的特殊Observable
// var subject = new Rx.Subject();

// subject.subscribe((v)=>{console.log(v);})
// subject.subscribe((v2)=>{console.log(v2);})

// subject.next(2);
// subject.next(3);

// 为什么要用到subject?
// subject相当与将Observable中的内容进行抽取出来，然后可自定义的分发数据到多个观察者。
// 其中一个好处在于：可让观察者先订阅被观察者，然后被观察者再定义分发的内容。
// 它可作为被观察者，也可以作为观察者。常用于观察者和被观察者之间的中介。

// var subject = new Rx.Subject();
// subject.subscribe({next:()={}}); // 中介与观察者

// var obserbable = Rx.Observable.from([12,3,4]); // from作用是构建一系列的数据进行next
// obserbable.subscribe(subject); // 被观察者与中介

// 因为普通的被观察者，是不能进行在多播的，而借助subject，可让被观察者进行多播。

// var source = Rx.Observable.from([2,3,4]);
// var subject = new Rx.Subject();
// var multicaseted = source.multicast(subject);
// multicaseted.subscribe(...);
// multicaseted.subscribe(...);
// multicaseted.connect(); // 手动connect

// 例子
// var observable = new Rx.Observable.from([1,2,3,4]);
// var subject = new Rx.Subject();
// var multicaseted = observable.multicast(subject);
// multicaseted.subscribe(v => {
//   console.log(v);
// });
// multicaseted.subscribe(v => console.log(v));
// multicaseted.subscribe(v => console.log(v));
// multicaseted.connect();　输出  111 222 333 4444 若不使用多播　则输出为　 1234 1234 1234

// 避免显示调用connect
// 使用引用计数 refCount，　它可以追踪可观察对象的订阅者数量，从０增加１时，则会自动调用分享被观察对象的执行，而从１　至　０　时，则自动取消执行。
  // var source = Rx.Observable.interval(500);
  // var subject = new Rx.Subject();
  // var refCounted = source.multicast(subject).refCount();
  // refCounted.subscribe(...);
  // refCounted.subscribe(...);


// 动态操作符
// Rx.Observable.prototype.multiplyByTen = function(){
//     var input=this;
//     return Rx.Observable.create(function subscribe(observer){
//         input.subscribe({
//             next: (v) => {
//               console.log(v);
//               observer.next(10*v);
//             },
//             error: (err) => observer.error(err),
//             complete: () => observer.complete()
//         });
//     });
// }
// // 注意input并不是作为函数的参数，而是作为this所指代的那个对象
// var observable = Rx.Observable.from([1,2,3,4]).multiplyByTen();
// observable.subscribe(x => console.log(x))

// Scheduler调度者
// 调度者控制着何时启动一个订阅和何时通知被发送
// 由３个组件构成
// 1.　数据结构
// 2. 执行上下文　(何处何时认为被执行)
// 3.具有虚拟的时钟
// 调度者使得你可以确定可观察对象在什么执行上下文中给观察者发送通知
// 异步调度
// var observable = Rx.Observable.create(function (proxyObserver) {
//   proxyObserver.next(1);
//   proxyObserver.next(2);
//   proxyObserver.next(3);
//   proxyObserver.complete();
// }).observeOn(Rx.Scheduler.async);
// var finalObserver = {
//   next: x => console.log('got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err
//   ),
//   complete: () => console.log('done'),
// };
// console.log('just before subscribe');
// observable.subscribe(finalObserver);
// console.log('just after subscribe');

var val = "123";


var observable = Rx.Observable.of(val);
var subject = new Rx.Subject();

var ref = observable.multicast(subject).refCount();
ref.subscribe(v=>{console.log(v);})





