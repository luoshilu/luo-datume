// 引入http 和 url 模块
var http = require('http');
var https = require('https');
var url = require('url');

var request;

// 请求类
function Request(){
  this.maxRedirects = 10;
  this.redirects = 0;
}

// 请求方法
Request.prototype.get = function(href, callback){
  var uri = url.parse(href);
  var options = {host: uri.host, path:uri.path};
  var httpGet = uri.protocol === 'http'? http.get : https.get;

  console.log('get: ', href);
  
  // 处理http响应
  function processResponse(res) {

    // 处理重定向
    if(res.statusCode >=300 && res.statusCode < 400) {
      if(this.redirects >= this.maxRedirects) {
        this.error = new Error('Too many redirects for;'+href);
      }else{
        this.redirects++;
        href = url.resolve(options.host, res.headers.location); // 重定向为headers.location
        return this.get(href, callback); // 递归发起请求
      }
    }

    if(res.statusCode >= 400) {
      console.log('status:', res.statusCode);
    }

    res.url = href;
    res.redirects = this.redirects;
    console.log('Redirected:', href);

    function end() {
      console.log('connection ended');
      callback(this.error, res);
    }
    
    res.on('data', function(data){ // 数据接收
      console.log('Got data, length:', data.length);
    });

    res.on('end', end.bind(this)); // 请求结束
    
  }

  httpGet(options, processResponse.bind(this)).on('error', function(err){
    callback(err);
  });
};


request = new Request();

var testUrl = 'http://www.baidu.com';
if(process.argv[2]){
  testUrl = process.argv[2];
}
request.get(testUrl, function(err, res){
  if(err){
    console.error(err);
  } else {
    console.log("Fetched URL:" , res.url, 'with', res.redirects, 'redirects');
    process.exit();
  }
});