
function mergesort(arr)
{
    if(arr.length < 2) {
        return arr;
    }
    // 获取中点
    var md = Math.floor(arr.length/2);
    var left = arr.slice(0, md);
    var right = arr.slice(md);
    return merge(mergesort(left), mergesort(right));
}

function merge(arr1,arr2){
    var result = [];
    while(arr1.length&&arr2.length)
    {
        if(arr1[0] <= arr2[0])
        {
            result.push(arr1.shift());
        }
        else
        {
            result.push(arr2.shift());
        }
    }
    if (arr1.length)
        result = result.concat(arr1);

    if (arr2.length)
    result = result.concat(arr2);
    return result;
}

var re = mergesort([1,2,7,3,6,3,99,8,6786]);
console.log(re);
