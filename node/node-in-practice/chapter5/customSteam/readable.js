var stream = require('stream');
var util = require('util');
var fs = require('fs');

// 实现一个可读取流
function JSONLineReader(source) {
  stream.Readable.call(this);
  this._source = source;
  this._foundLineEnd = false;
  this._buffer = '';

  source.on('readable', function(){ // readable
    this.read();
  }.bind(this));
}

util.inherits(JSONLineReader, stream.Readable);

JSONLineReader.prototype._read = function(size){ // 
  var chunk, line, lineIndex, result;
  this.readNum = this.readNum + 1;
  if(this._buffer.length === 0) {
    chunk = this._source.read();
    this._buffer += chunk;
  }
  console.log('////');
  console.log(this._buffer);
  console.log('====');
  
  lineIndex = this._buffer.indexOf('n');
  if(lineIndex !== -1) { // 遇到n，生成一个对象
    line = this._buffer.slice(0, lineIndex);
    if(line) {
      result = JSON.parse(line);
      this._buffer = this._buffer.slice(lineIndex+1);
      this.emit('object', result);
      this.push(util.inspect(result));
    }else{
      this._buffer = this._buffer.slice(1);
      this.push('{}');
    }
  }
};

var input = fs.createReadStream(__dirname+'/json-line.txt', {encoding: 'utf8'});

var JSONLineReader = new JSONLineReader(input);

JSONLineReader.on('object', function(obj){ // 监听object事件
  // console.log(obj);
});

// 使用objectMode配置的流 （处理I/O文件，网络等通常会使用原始字节或字符流流，而objectMode配置用于创建javascript对象流）

// function MemoryStream(options) {
//   options = options || {};
//   options.objectMode = true; // 设置 options 的objectMode属性
//   stream.Readable.call(this, options);
// }

// util.inherits(MemoryStream, stream.Readable);

// MemoryStream.prototype._read = function(size) {
//   this.push(process.memoryUsage());
// };

// var memoryStream = new MemoryStream();

// memoryStream.on('readable', function(){
//   var output = memoryStream.read();
//   console.log(output);
// });
