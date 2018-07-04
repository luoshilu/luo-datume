var arr = [1,2,3];

// arr.shift();
// console.log(arr);[2, 3]

// arr.pop();
// console.log(arr);


// index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// item1, ..., itemX	可选。向数组添加的新项目。
arr.splice(0,2);


// console.log(arr);

var removeDuplicates = function(nums) {
    var obj_num = {};
    var obj_str = {};
    for(let i=0;i<nums.length;){
        let n = nums[i];
        if(typeof n === 'number')
            {
                if(!obj_num[n]){
                    obj_num[n] = true;
                    i++;
                }
                else
                {
                    nums.splice(i,1);    
                }
            }
        else
            {
                if(!obj_str[n])
                {
                    obj_str[n] = true;
                    i++;
                }
                else
                {
                    nums.splice(i,1);
                }
            }
    }
    return nums;
};

console.log(removeDuplicates([1,1,1,'1',2]));


