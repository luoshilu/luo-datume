var stream = require('stream');
var util = require('util');
// var fs = require('fs');
var express = require('express');

var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.listen(8000);

function StatStream(limit) {
  stream.Readable.call(this);
  this.limit = limit;
}

util.inherits(StatStream, stream.Readable);

StatStream.prototype._read = function(size) {
  console.log(this.limit);
  
  if(this.limit === 0) {
    // Done
    this.push();
  }else{
    this.push(util.inspect(process.memoryUsage()));
    this.push('n');
    this.limit--;
  }
};

app.get('/', function(req, res){
  var statStream = new StatStream(10);
  statStream.pipe(res);
});

app.listen(8000);