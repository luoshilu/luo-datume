[详情](http://jquery.cuishifeng.cn/load.html)

## load(url, [data], [callback])

载入远程 HTML 文件代码并插入至 DOM 中。

### 实例

    $("#feeds").load(
        "feeds.php",
        {limit: 25},
        function(res){
            return res;
    });

### 参数

    url,[data,[callback]]       String,Map/String,Callback

1. url
> 待装入 HTML 网页网址。
1. data
> 发送至服务器的 key/value 数据。在jQuery 1.3中也可以接受一个字符串了。
1. callback
> 载入成功时回调函数。

> 注：[]表示参数不是必要的