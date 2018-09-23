// 二进制文件编码转化为JSON

var fs = require("fs");

fs.readFile("./FOXUSER.DBF", function(arr, buf) {
  // 头部信息(知道如何读取这个文件的元数据)
  var header = {};
  var date = new Date();
  date.setFullYear(1900 + buf[1]);
  date.setMonth(buf[2]);
  date.setDate(buf[3]);
  header.lastUpdate = date.toString();

  header.totalRecords = buf.readUInt32LE(4); // 数据记录数
  header.bytesInHeader = buf.readUInt16LE(8); // 头部的字节数
  header.bytesPerRecord = buf.readUInt32LE(10); // 每个数据记录的字节数 (readUInt32LE方法->从第10字节读取32个比特的值)

  // 字段描述(头部信息的一部分,用于处理元数据)
  var fields = [];
  var fieldOffset = 32; // 从第32字节开始,为字符描述部分,
  var fieldTerminator = 0x0d; // 字段终结符

  var FIELE_TYPES = {
    // 用于类型名称映射
    C: "Character",
    N: "Number"
  };

  while (buf[fieldOffset] != fieldTerminator) {
    var fieldBuf = buf.slice(fieldOffset, fieldOffset + 32); // 每个字段占32字节

    var field = {};
    field.name = fieldBuf.toString("ascii", 0, 11).replace(/\u0000/g, ""); // 字段名字
    field.type = FIELE_TYPES[fieldBuf.toString("ascii", 11, 12)]; // 字段类型
    field.length = fieldBuf[16]; // 字段长度

    fields.push(field);
    fieldOffset += 32;
  }

  // 数据记录(依赖字段描述来读取)

  var startingRecordOffset = header.bytesInHeader; // 头部结束的位置是数据记录起始位置
  var records = [];

  for (var i = 0; i < header.totalRecords; i++) {
    var recordOffset = startingRecordOffset + i * header.bytesPerRecord;
    var record = {};

    record._isDel = buf.readUInt8(recordOffset) == 0x2a; // 查询记录是否被删除(记录的第一个字节保存记录是否被删除,没被删除则是空格(20h),被删除则是星号(2Ah))
    recordOffset++;
    for (var j = 0; j < fields.length; j++) {
      field = fields[j];
      // if (!field.type) {
      //   record[field.name] = buf
      //     .toString("utf8", recordOffset, recordOffset + field.length)
      //     .trim();
      //   recordOffset += field.length;
      //   continue;
      // }
      var Type = field.type === "Number" ? Number : String;
      record[field.name] = Type(
        buf.toString("utf8", recordOffset, recordOffset + field.length).trim()
      );
      recordOffset += field.length;
    }

    records.push(record);
  }

  var result = { header: header, fields: fields, records: records };

  fs.writeFile("writeBrnaryToJson.json", JSON.stringify(result));
});
