var stream = require('stream');
var util = require('util');
var fs = require('fs');

function OutJson(){
  stream.Readable.call(this, {encoding: "utf-8"});
}

util.inherits(OutJson, stream.Readable);

var writeStream = fs.createWriteStream('out.json', {encoding: "utf-8"});

OutJson.prototype._read = function(){
  var i = 0;
  var len = 1000;
  this.push(`[`);
  while( i <= len){
    this.push(`{"a${i}":"${i}"}${i==len?'':','}`);
    i++;
  }
  this.push(`]`);
  this.push(null);
  return;
};
var outJson = new OutJson();

outJson.pipe(writeStream);