/*@param  array 待排序数组*/
function heapSort(array) {
    console.time('堆排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length, temp;

        // Math.floor(heapSize / 2) - 1 是获取大堆的最右下的小堆的顶。从这个小堆开始进行堆的维护，每次循环是一个小堆的计算。
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }

        //堆排序
        // 每次将堆顶(最大的值)与堆的最后一个值进行交换。
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            // 
            heapify(array, 0, --heapSize);
        }
        console.timeEnd('堆排序耗时');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   小堆下标
@param  len 需要维护的大堆长度*/
function heapify(arr, x, len) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        // x是小堆的顶，所以 l 是小堆的左下节点，r是小堆的右下节点。
        var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;

        // 将小堆的三个节点进行大小比较，将最大的作为根节点，(l<len　表示该节点是堆内的节点，用于判断子节点下的堆进行维护时，发现该堆不存在，即该节点已经是大堆的最后一层)
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            // 若堆顶发生了与左右节点的值置换，那么需要对子节点下的堆进行维护
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}
var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heapSort(arr));//[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
