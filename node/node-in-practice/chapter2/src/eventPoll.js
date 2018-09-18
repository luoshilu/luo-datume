// setTimeout
// setInterval
// process.nextTick
// setImmesiate
// process.maxTickDepth

var EventEmitter = require("events").EventEmitter;
var fs = require("fs");
var content;

function readFileIfRequired(cb) {
  if (!content) {
    fs.readFile(__filename, "utf8", function(err, data) {
      content = data;
      console.log("readFileIfRequired: readFile");
      cb(err, content);
    });
    setTimeout(function() {
      console.log("test setTimeout");
    }, 0);
    process.nextTick(function() {
      console.log("test nextTick");
    });
    setImmediate(function() {
      console.log("test setImmedite");
    });
    var total = 0;
    for (var i = 0; i < 100000; i++) {
      total = total + Math.cos(i) * Math.tan(i);
      if (i > 99998) {
        console.log(total);
      }
    }
  } else {
    process.nextTick(function() {
      console.log("readFileIfRequired: cached");
      cb(null, content);
    });
  }
}

readFileIfRequired(function(err, data) {
  console.log("1. length:", data.length);

  readFileIfRequired(function(err, data2) {
    console.log("2. length", data2.length);
  });

  console.log("reading file again");
  // console.log(process.maxTickDepth);
});

console.log("reading file...");
