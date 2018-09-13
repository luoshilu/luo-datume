let CountStream = require("./countstream");

let countStream = new CountStream("div");

let http = require("http");

http.get("http://www.baidu.com", res => {
  // 使用管道传输数据时，不用关心数据有多大或网速有多慢．
  // countStream会完整进行匹配，直到数据处理完．
  // node程序不会一开始下载整个文件，而是一块一块的处理
  res.pipe(countStream);
});

countStream.on("total", count => {
  console.log("Total num:" + count);
});
