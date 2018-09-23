var fs = require("fs");

var store = require("./binaryProtocol");

fs.readFile("./myBinaryData.dbf", function(er, buf) {
  var dbBase = (async () => await store(buf))();
  dbBase.then(data => console.log(data));
});
