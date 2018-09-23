// 图片文件的编码转化

var fs = require("fs");

var mime = "image/png";
var encoding = "base64";

// 图片编码
var data = fs.readFileSync("./cat.png").toString(encoding);
var uri = "data:" + mime + ";" + encoding + "," + data;

// console.log(Number("434"));

// console.log(uri);
// 解码生成图片

var imgdata = uri.split(",")[1];
var imgbuf = Buffer(imgdata, "base64");
// console.log(imgbuf);

fs.writeFileSync("cat2.png", imgbuf);
