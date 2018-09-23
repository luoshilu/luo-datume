var fs = require("fs");

fs.readFile("./bufferType.js", function(er, buf) {
  // console.log(Buffer.isBuffer(buf));
  console.log(buf.toString("UTF-8"));
});
