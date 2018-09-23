// 自定义二进制文件协议

var zlib = require("zlib"); // zlib解压缩
var fs = require("fs");
// 协议内容
// 0   1byte  决定数据要写入哪个数据库
// 1   1byte  一个字节的无符号整数(0-255)用于数据库键存储
// 2-n 存储的数据,任意通过zlib进行压缩的byte
function store(buf) {
  var dbBase = [[], [], [], [], [], [], [], []]; // 存储数据
  var bitmasks = [1, 2, 4, 8, 16, 32, 64, 128]; // 掩码

  var db = buf[0];
  var key = buf.readUInt8(1);

  // 是否是zlib进行压缩的,若是,则第一个字节将会是0x78
  if (buf[2] == 0x78) {
    // 解压缩
    return new Promise(function(resolve) {
      zlib.inflate(buf.slice(2), function(er, inflateBuf) {
        if (er) return console.error(er);

        var data = inflateBuf.toString();
        bitmasks.forEach(function(bitmask, index) {
          // 存储在哪个数据库中, 比如要存储在第2个,则 00000010 & bitmask(000000010) === bitmask; 要同时存储在第3和第4个, 则 00001100 & bitmask(00000100) === bitmask, 00001100 &  bitmask(00001000) === bitmask
          if ((db & bitmask) === bitmask) {
            dbBase[index][key] = data;
            resolve(dbBase);
          }
        });
      });
    });
  }
}

// module.exports = store;

// 创建一个符合自定义二进制协议的数据
// var header = new Buffer(2);
// header[0] = 8;
// header[1] = 0;
// zlib.deflate("custom data..", function(er, deflateBuf) {
//   if (er) return console.error(er);

//   var data = Buffer.concat([header, deflateBuf]);
//   fs.writeFile("myBinaryData.js", data);
//   // store(data);
// });

// setTimeout(function() {
//   console.log(dbBase);
// }, 110);
