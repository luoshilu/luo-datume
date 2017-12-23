[详情](http://jquery.cuishifeng.cn/jQuery.get.html)

## jQuery.get(url, [data], [callback], [type])

通过远程 HTTP GET 请求载入信息。

### 实例

    $.get(
        "test.cgi",
        { name: "John", time: "2pm" },
        function(data){
            alert("Data Loaded: " + data);
        }
    );

### 参数

    url,[data],[callback],[type]               String,Map,Function,String

1. url:待载入页面的URL地址
1. data:待发送 Key/value 参数。
1. callback:载入成功时回调函数。
1. type:返回内容格式，xml, html, script, json, text, _default。