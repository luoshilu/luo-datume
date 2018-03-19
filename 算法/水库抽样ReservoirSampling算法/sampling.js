// 从０～10000随机取10个不重复的数

function samp(max, k)
{
    var ary = [];
    for(var i=1;i <= k;i++)
    {
        ary.push(i);
    }

    for(var i=k+1;i <= max;i++)
    {
        // 以 k/i的概率选择是否替换
        if(Math.ceil(Math.random()*i) <= k)
        {
            // 数组中的随机一个值的下标
            var index = Math.floor(Math.random()*(k));
            // 替换
            ary[index] = i;
        }
    }
    return ary;
}

console.log(samp(100, 3));
