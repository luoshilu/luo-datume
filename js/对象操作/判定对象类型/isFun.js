function isFun(obj)
{
    return Object.prototype.toString.call(obj) === '[object Function]';
}

// console.log(isFun(function(){}));
