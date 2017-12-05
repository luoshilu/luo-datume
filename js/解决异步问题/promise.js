var num = 10;

function asyTimeOut(resolve, reject) {
    setTimeout(function() {
        console.log("保留技能，１s后再输出...");
        resolve(++num);
    }, 3000);
}

var result2 = new Promise(asyTimeOut);
result2.then(val => {
    console.log(val);
})


var result = new Promise(asyTimeOut);

result.then(function(val){
    console.log(val);
})

var totle = Promise.all([result,result,result2,result2]);

totle.then(t=>{
    t.map((num)=>{
        console.log(num);
    })
})

console.log('哈' + num);