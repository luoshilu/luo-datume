var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});

console.log(flattened);


// 查询数组不重复的元素个数

var arr = ["apple","orange","apple","orange","pear","orange"];

Array.prototype.repeat = function()
{
    var lth = this.length;
    var obj = {};
    for (var i=0;i < lth;i++)
    {
        obj[this[i]] = (obj[this[i]] + 1) || 1;
    }
    return Object.keys(obj).length;
}
console.log(arr.repeat());


var obj = arr.reduce(function(pre,next)
{
    pre[next] = (pre[next] + 1)||1;
    return pre;
}, {})

var lt = Object.keys(obj).length;
console.log(lt);
