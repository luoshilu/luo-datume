var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  // 解析请求
  
  var options = url.parse(req.url);
  
  options.headers = req.headers;
  console.log(options);

  var proxyRequest = http.request(options, function(proxyResponse){
    // 监听代理请求的响应
    proxyResponse.on('data', function(chunk){
      console.log('proxyResponse length:', chunk.length);
      res.write(chunk, 'binary');
    });

    proxyResponse.on('end', function(){
      console.log('proxied  request ended');
      res.end();
    });

    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
  });

  req.on('data', function(chunk){
    console.log('in requist length:', chunk.length);
    proxyRequest.write(chunk, 'binary');
  });

  req.on('end',  function(){
    console.log('original request ended');
    proxyRequest.end();
  });
}).listen(8080);