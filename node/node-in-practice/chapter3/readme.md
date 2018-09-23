# 使用比特,字节以及编码

## buffer 数据类型

- 由于 javascritp 没有提供较好的方式来处理原始的内存数据,所以,对内存数据进行处理都在 buffer 数据类型中.
- buffer 可看做 javascript 的一种数据类型,类似于数组(8 位字节组(16 进制) <Buffer 0a 00 00 9d ...>),buf[0]代表第一个字节的 buffer 值.

## 数据类型转化

- 使用 fs 读取文件时,回调的入参为 buffer 类型.

```
fs.readFile('./FOXUSER.DBF',function(er, buf){
  var isBuf = isBuffer(buf); // true
})

var buf = fs.readFileSync('./FOXUSER.DBF');
ifBuffer(buf); // true
```

- buffer 转化为其它格式

```
buf.toString(); // 转为字符串(默认使用UTF-8编码);

buf.toString('base64'); // 转为base64编码的字符串

buf.toString('ascii); // 转为ascii码
```

- 使用 buffer 来修改字符串编码

```
var buf1 = new Buffer('console.log("hello")');// 默认为UTF-8

var buf2 = new Buffer('123321abcd', 'base64'); // base64编码

fs.writeFile('./file.js', buf1);

```
> 注: 不同的编码对应的buf是不同的, 对应的文件内容也是不同的.比如图片会使用base64编码,js等文件使用utf-8编码.若你对图片格式的文件使用了utf-8编码,那么这个图片将不能正常使用.对于其它类型文件也是一样,只要当前编码不在文件格式所支持的范围内,那么这个文件将不能正常使用.

- 二进制文件转为JSON

使用文件系统的API(fs)读取二进制文件,然后用Buffer API 转化为更加易用的JSON格式.

```
world.dbf  ----fs.readFile--> 使用node.js操作二进制 (DBASE5.0,Node Buffer API) ---console.log--> JSON
```

二进制文件协议(DBase5.0文档):

**头部信息**

| 0     | 1 byters | 版本信息             |
| ----- | -------- | -------------------- |
| 1-3   | 3bytes   | 最后更新的日期       |
| 4-7   |          | 记录的数量           |
| 8-9   |          | 头部的比特数         |
| 10-11 |          | 每个记录部分的比特数 |

头部总长度为32字节

**字段描述数组**

| 32-n | 32bytes | 字段描述数组      |
| ---- | ------- | ----------------- |
| n+1  | 1byte   | ODH作为字段结束符 |

每个字段描述包含:

| 0-10 | 11bytes | 字段名   |
| ---- | ------- | -------- |
| 11   | 1byte   | 字段类型 |
| 16   | 1byte   | 字段长度 |

每个字段总共会占32字节.
所有字段结束后会有一个16进制表示字段终结符 0x0D,表示字段描述部分结束

**数据记录**

字段描述结束后,就是数据记录部分,读取数据记录部分的数据时,根据字段描述的信息来进行获取.

代码见analysisBinaryFile.js文件.


