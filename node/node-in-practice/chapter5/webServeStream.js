var http = require('http');
var fs = require('fs');

// http.createServer(function(req, res){
//   fs.readFile(__dirname + '/index.html', function(err, data){
//     if (err) {
//       res.statusCode = 500;
//       res.end(String(err));
//     }else{
//       res.end(data);
//     }
//   })
// }).listen(8000);

// 使用流

// http.createServer(function(req, res) {
//   fs.createReadStream(__dirname + '/index.html').pipe(res);
// }).listen(8000);

// 添加 gzip压缩

// var zlib = require('zlib');

// http.createServer(function(req, res) {
//   res.writeHead(200, {'content-encoding': 'gzip'});
//   fs.createReadStream(__dirname + '/index.html')
//     .pipe(zlib.createGzip())
//     .pipe(res);
// }).listen(8000);

// 监听错误

var stream = fs.createReadStream('not-found-file');

stream.on('error', function(err){
  console.trace();
  console.error('Stack', err.stack);
  console.error('The error raised was:', err);
})

