var stream = require('stream');
var util = require('util');
var fs = require('fs');


function GreemStream (options) {
  stream.Writable.call(this, options);
}

util.inherits(GreemStream, stream.Writable);

// var out = fs.createWriteStream({encoding: "utf-8"});

GreemStream.prototype._write = function(chunk, encoding, callback) {
  process.stdout.write(chunk);
  callback();
};

process.stdin.pipe(new GreemStream());
