
[详情](http://jquery.cuishifeng.cn/jQuery.Ajax.html)

## jQuery.ajax(url,[settings])

通过 HTTP 请求加载远程数据。是jQuery 底层 的　AJAX 实现。

### 实例

    $.ajax(
        {
            url: "test.html",
            context: document.body, 
            success: function(){
                $(this).addClass("done");
            }
        }
    );

### 参数

    url,[settings]                       Object

### settings:选项
1. url
> 
1. success(data, textStatus, jqXHR)
> 

1. async
> 默认: true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
1. contents
> 一个以"{字符串:正则表达式}"配对的对象，用来确定jQuery将如何解析响应，给定其内容类型。
1. data
> 发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后。查看 processData 选项说明以止此自动转换。必须为 Key/Value 格式。如果为数组，jQuery 将自动为不同值对应同一个名称。如 {foo:["bar1", "bar2"]} 转换为"&foo=bar1&foo=bar2"。
1. dataType
> 预期服务器返回的数据类型。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断,比如：xml，script,json,jsonp.text。
1. error
1. jsonp
1. timeout
> 当请求之后调用。传入返回后的数据，以及包含成功代码的字符串。
1. complete
> 当请求完成之后调用这个函数，无论成功或失败。传入XMLHttpRequest对象，以及一个包含成功或错误代码的字符串。
...

> 注：[]表示参数不是必要的