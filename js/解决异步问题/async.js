
// function asyTimeOut(resolve, reject) {
//     setTimeout(function() {
//         console.log("保留技能，１s后再输出...");
//         resolve(++num);
//     }, 1000);
// }
function asyTimeOut(time, val){
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log("延迟"+time/1000+"秒输出...");
            resolve(++val);
        }, time)
    })
}

// async function doAsyncOp() {
//     console.log("开始...");
//     var val = await asyTimeOut(3000, 10);
//     console.log(val);
//     return val;
// }
// doAsyncOp();

// 链式操作

// async function doAsyncOp2() {
//     console.log("开始...");
//     var val = await asyTimeOut(3000, 10);
//     console.log(val);
//     val = await asyTimeOut(3000, val);
//     console.log(val);
//     val = await asyTimeOut(3000, val);
//     console.log(val);
//     return val;
// }
// var val = doAsyncOp2();
// console.log(val.then((v)=>v))
// function doAsyncOp3() {
//     return asyTimeOut(3000, 10)
//         .then(function(val) {
//             console.log(val);
//             return asyTimeOut(3000, val);
//         })
//         .then(function(val) {
//             console.log(val);
//             return asyTimeOut(3000, val);
//         })
//         .then(function(val) {
//             console.log(val);
//             return asyTimeOut(3000, val);
//         });
// }
// doAsyncOp3()

// 并发操作
// function doAsyncOp3() {
//     return Promise.all([
//         asyTimeOut(3000,10),
//         asyTimeOut(3000,15)
//     ]).then(function(vals) {
//       vals.forEach(console.log);
//       return vals;
//     });
// }
// doAsyncOp3();

// async function doAsyncOp3() {
//     var list = await Promise.all([
//         asyTimeOut(3000,10),
//         asyTimeOut(3000,15)]);
//     list.forEach(console.log);
// }
// doAsyncOp3();


// 处理拒绝 和 promise中断

// promise使用reject进行拒绝处理，然后将其值传到catch中。
// 而async则使用try catch来进行拒绝处理

// function asyTimeOut(time, val){
//     return new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             console.log("延迟"+time/1000+"秒输出...");
//             val < 10?resolve(++val):reject(new Error("I just think an error should be here"))
//         }, time)
//     })
// }

// function doAsyncOp3 () {
//     // throw new Error("something is bad");
//     var pv = asyTimeOut(3000, 10).catch(v=>{
//         console.log(v);
//     });
// }
// doAsyncOp3();
// async function doAsyncOp4 () {
//     try {
//         var val = await asyTimeOut(3000, 10);
//         val = await asyTimeOut(3000, val);
//         return await asyTimeOut(3000, val);
//     } catch (err) {
//         console.log(err);
//     }
// };
// doAsyncOp4();

// 函数嵌套问题
// 若在async函数中嵌套了其它函数，比如回调，那么回调中的await将会无效

// async function doAsyncOp5() {
//     return Promise.all(
//         [1000,2000].map(function(time) {
//             var file = await asyTimeOut(time, 10);　// 这个await没有效果,报错Unexpected identifier
//             return file;
//         })
//     );
// }
// doAsyncOp5();
// 修改如下
async function doAsyncOp5() {
    return Promise.all(
        [1000,2000].map(async function(time) {
            var p = await asyTimeOut(time, 10);
            return p;
        })
    );
}
doAsyncOp5();