var arr = [1,2,3,4];

arr.push('新增');
arr.push(5,6,7);

console.log(arr);// [1, 2, 3, 4, "新增", 5, 6, 7]


var back = arr.splice(2,0,10,11);

console.log(arr);// [1, 2, 10, 11, 3, 4, "新增", 5, …]

arr.splice(1,2,'test');

console.log(arr);// [1, "test", 11, 3, 4, "新增", 5, 6, …]

console.log(back); // []

console.log(Object.prototype.toString.apply(back));

