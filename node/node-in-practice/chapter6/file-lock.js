var fs = require('fs');

/**
 * 使用独占标记来创建锁文件
 */

// fs.open('config.lock', 'wx',function(err){  //x标记(以独占模式<O_EXCL>打开)
//   if(err) return console.log(err);
//   // 在这安全的修改config.json
// });

// fs.writeFile('config.lock', process.pid, {flags: 'wx'}, function(err){ // 如何不存在锁文件的话，写入PID来锁住文件
//   if(err) return console.log(err);
//   // 在这安全的修改config.json
// });

/** 
 * 通过mkdir创建锁文件  <用于网络磁盘上独占模式可能不能正常工作时>
 */

// fs.mkdir('config.lock', function(err){ // 目录存在时mkdir会失败
//   if(err) return console.error(err);
//   fs.writeFile('config.lock/'+process.pid, process.pid, function(err){
//     if(err) return console.error(err);
//     // 在这安全的修改config.json
//   });
// });
