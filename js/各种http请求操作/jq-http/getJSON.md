
[详情](http://jquery.cuishifeng.cn/jQuery.getJSON.html)

## jQuery.getJSON(url, [data], [callback])

通过 HTTP GET 请求载入 JSON 数据。
在 jQuery 1.2 中，您可以通过使用JSONP形式的回调函数来加载其他网域的JSON数据

### 实例

> 从 Flickr JSONP API 载入 4 张最新的关于猫的图片。

    $.getJSON(
        "http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?",
        function(data){
            $.each(data.items, function(i,item){
                $("<img/>").attr("src", item.media.m).appendTo("#images");
                if ( i == 3 ) return false;
            });
        }
    );

> 从 test.js 载入 JSON 数据，附加参数，显示 JSON 数据中一个 name 字段数据。

    $.getJSON("test.js", { name: "John", time: "2pm" }, function(json){
        alert("JSON Data: " + json.users[3].name);
    });

### 参数

    url,[data],[callback]               String,Map,Function

1. url:发送请求地址。
1. data:待发送 Key/value 参数。
1. callback:载入成功时回调函数。"