ary = ['a','b'];
ary.name = 'array';
for (var key in ary)
{
    // console.log(key);
}

var obj = {a: 123}

for (var v of obj)
{
    console.log(v);
}