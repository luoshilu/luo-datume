var arr = [1,2,3,4];

var b = arr.slice(0,1); // 返回 [1]
var b1 = arr.slice(1,3); // [2,3]
var b2 = arr.slice(1); // [2, 3, 4]
var b3 = arr.slice(1,-1); // [2,3]
// console.log(b3);

var c = arr.concat([1,2,3]);
console.log(c);


