// // var　foo = {n:1};

// // (function(foo){
// //     console.log(foo.n);
// //     foo.n = 3;
// //     var foo = {n:2};
// //     console.log(foo.n);

    
// // })(foo)

// // console.log(foo.n);


var select = function(arr) {
    if (arr.length > 1)
    {
        var left = [];
        var right = [];
        // 取一个基值
        var base = arr[Math.floor(arr.length/2)];

        // 循环数组，将小的值放在左边，大的值放在右边
        for(var i=0,length = arr.length;i < length;i++)
        {
            if(arr[i] < base)
            {
                left.push(arr[i]);
            }
            else if(arr[i] > base)
            {
                right.push(arr[i]);
            }
        }
        return select(left).concat([base], select(right));
    }
    else
    {
        return arr
    }
}



// var quickSort = function(arr) {
//     console.time('2.快速排序耗时');
// 　　if (arr.length <= 1) { return arr; }
// 　　var pivotIndex = Math.floor(arr.length / 2);
// 　　var pivot = arr.splice(pivotIndex, 1)[0];
// 　　var left = [];
// 　　var right = [];
// 　　for (var i = 0; i < arr.length; i++){
// 　　　　if (arr[i] < pivot) {
// 　　　　　　left.push(arr[i]);
// 　　　　} else {
// 　　　　　　right.push(arr[i]);
// 　　　　}
// 　　}
// console.timeEnd('2.快速排序耗时');
// 　　return quickSort(left).concat([pivot], quickSort(right));
// };

// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(quickSort(arr,0,arr.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// // console.log(quickSort(arr));