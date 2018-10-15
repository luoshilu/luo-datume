var fs = require('fs');
var zlib = require('zlib');

function benchStream(inSize, outSize) {
  var time = process.hrtime(); // 纳秒
  var watermark = process.memoryUsage().rss; // 内存统计
  var input = fs.createReadStream("./customSteam/out.json", {
    bufferSize: inSize // 设置缓存区大小
  });

  var gzip = zlib.createGzip({chunkSize: outSize});
  var output = fs.createWriteStream('out.zip', {bufferSize: inSize});

  var memoryCheck = setInterval(function(){ 
    var rss = process.memoryUsage().rss;

    if(rss > watermark ) {
      watermark = rss;
    }
  }, 50);

  input.on('end', function() {
    var memoryEnd = process.memoryUsage();
    clearInterval(memoryCheck);

    var diff = process.hrtime(time); // 耗时

    console.log([inSize, outSize, (diff[0]*1e9 + diff[1] / 100000), watermark / 1024].join(','));
    
  });

  input.pipe(gzip).pipe(output);

  return input;
}

console.log('file size, gzip size, ms, RSS');

var fileSize = 128;
var zipSize = 5024;

function run (times) {
  benchStream(fileSize, zipSize).on('end', function(){
    times--;
    fileSize *= 2; 
    zipSize *= 2;

    if(times > 0){
      run(times);
    }
  });
}

run(40);
