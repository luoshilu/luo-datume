function isObj(obj)
{
    return obj !== null&&typeof obj === 'object';
}


// 判定是否为{}对象
// 使用keys

function _Obj_(obj)
{
    if (isObj(obj))
    {
        return Object.keys(obj).length === 0;
    }
}

console.log(_Obj_({a:1}));
