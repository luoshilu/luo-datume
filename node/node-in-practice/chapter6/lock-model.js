/**
 * 创建一个锁文件模块
 */

var fs = require('fs');
var hasLock = false;
var lockdir = 'config.lock';

exports.lock = function(cb) {
  if(hasLock) return cb();
  
  fs.mkdir(lockdir, function(err){
    if(err) return cb(err);
    fs.writeFile(lockdir + '/' + process.pid, process.pid, function(err){
      if(err) return console.error(err);
      hasLock = true;
      return cb();
    });
  });
};

exports.unlock = function(cb) {
  if(!hasLock) return cb();

  fs.rmdir(lockdir, function(err){
    if(err) return cb(err);
    hasLock = false;
    cb();
  });
};

process.on('exit', function(){
  if(hasLock) {
    fs.unlinkSync(lockdir + '/' + process.pid);
    fs.rmdirSync(lockdir);
    console.log('remove lock');
  }
});
 