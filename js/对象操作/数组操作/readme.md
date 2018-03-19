# 常用方法

## 创建数组

    var arr = [1,2,3];

    var arr = new Array(8); // 创建一个长度为8的数组(非上限)

    var arr = new Array([1,2,3,4]); // [[1,2,3,4]]
    var arr = new Array(1,2,3,4); // 创建并赋值一个数组 [1,2,3,4]

## 数组的元素的访问

    arr[1];
    arr[1] = '新的';

## 数组元素的添加

    arr.push('后面新增','后面新增2',4,5); //后面新增一个或者多个，返回新数组长度
    arr.unshift('前面新增'); // 前面新增一个或者多个,返回新数组长度

    // 参数＝>(在第几个值的后面开始插入，从这个位置开始删除几个元素，要插入的值)
    // 返回:被替换的值组成的数组，若为空则为[]
    arr.splice(1,0,'插入的值','插入的值２');

## 数组元素的删除

    arr.shift();// 删除数组中的第一个元素

    arr.pop();// 删除数组中最后一个元素

    arr.splice(0,2); // 删除前两个元素
    arr.splice(1,2); // 删除第一个元素后的两个元素

## 数组的截取和合并
    var arr = [1,2,3,4];

    // slice([start,end)); 包含start下标，不包含end　
    var b = arr.slice(0,1); // 返回 [1]
    var b1 = arr.slice(1,3); // [2,3]
    var b2 = arr.slice(1); // [2, 3, 4]
    var b3 = arr.slice(1,-1); // [2,3]

    // concat()
    var c = arr.concat([４]);// 返回　[1,2,3,4]

## 数组的拷贝

    var n = arr.slice(0);
    var n2 = arr.concat();

## 数组元素的排序

    arr.sort();　// 排序

    arr.reverse(); // 倒序

## 数组元素的字符串化

    var str = arr.join('-'); '1-2-3-4'
    var str2 = arr.toString(); // '1,2,3,4'
    var str3 = arr.toLocaleString(); // '1,2,3,4'

## lastIndexOf
    arr.lastIndexOf(4);// 查找数组中最后一个4的下标

# 属性

## length
arr.length　可获取数组的长度。
数组长度，可手动对其进行改变
    １. length > 原数组的长度
    数组内容不发生改变
    2. length < 原数组长度
    length后的元素将被丢弃，若再将length修改回来，元素不会被找回
    3. arr长度为10，若执行arr[20] = '20'，那么arr长度则变成了20
## prototype

## constructor

# 数组的迭代

## filter

    arr.filter(function(){return Boolean})

循环数组，回调返回true则选择该元素，否则丢弃该元素。
最后返回筛选后的元素组成的数组。

## forEach
循环数组执行回调函数，不返回值

## map
循环数组，返回新的数组。

## every
判断数组的每项元素是否都符合条件，全部符合则返回true。

## some
数组有某项符合条件，则返回true。


## reduce
arr.reduce(callback,[initialValue])

**callback**:执行数组中每个值的函数，包含四个参数

* previousValue:上一次调用回调返回的值，或者是提供的初始值（initialValue）
* currentValue 数组中当前被处理的元素
* index 当前元素在数组中的索引
* array 调用 reduce 的数组

**initialValue**: 作为第一次调用 callback 的第一个参数

常用实例:

1. 将数组所有项相加
2. 数组扁平化
3. 统计一个数组中有多少个不重复的单词


# 总结

pop,push,reverse,shift,sort,splice,unshift **会改变原数组**
join,concat,indexOf,lastIndexOf,slice,toString **不会改变原数组**
map,filter,some,every,reduce,forEach **这些迭代方法不会改变原数组**

几个注意点：

shift,pop会返回那个被删除的元素
splice 会返回被删除元素组成的数组，或者为空数组
push 会返回新数组长度
some 在有true的时候停止
every 在有false的时候停止
上述的迭代方法可以在最后追加一个参数thisArg,它是执行 callback 时的 this 值。