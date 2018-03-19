function isDate(obj)
{
    return Object.prototype.toString.call(obj);
    // return obj.constructor == Date;
}

isDate(new Date())

// console.log(Function.prototype.__proto__.constructor);
