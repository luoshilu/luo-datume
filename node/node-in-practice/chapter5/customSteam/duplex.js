var stream = require('stream');
var util = require('util');
var fs = require('fs');

function HungryStream(options){
  stream.Duplex.call(this, options);
  this.warting = false;
}

util.inherits(HungryStream, stream.Duplex);

HungryStream.prototype._write = function (chunk, encoding, callback) {
  this.writing = false;
  this.push(chunk);
  callback();
};

HungryStream.prototype._read = function (size) {
  // this.push('Feed me data');
  this.warting = true;
};

var hungryStream = new HungryStream();
process.stdin.pipe(hungryStream).pipe(process.stdout);