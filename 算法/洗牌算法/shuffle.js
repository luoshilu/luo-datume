Array.prototype.shuffle = function()
{
    var arr = this;
    if (Array.isArray(arr))
    {
        for(var i=arr.length-1;i > 0;i--)
        {
            var randowIndex = Math.floor(Math.random()*i);
            var randowVal = arr[randowIndex];
            arr[randowIndex] = arr[i];
            arr[i] = randowVal;
        }
    }
    return arr;
}

// console.log([1,2,8,3,5].shuffle());


