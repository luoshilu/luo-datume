var fs = require('fs');
var join = require('path').join;

exports.find = function(nameRe, startPath, cb) {
  var results = [];
  var asyncOps = 0; // 计数器
  var errored = false; // 是否发生了错误,防止多个错误调用

  function error(err) {
    if(!errored) cb(err);
    errored = true;
  }

  function finder (path) {
    asyncOps++;
    fs.readdir(path, function(err, files){
      files.forEach(function(file){
        var fpath = join(path, file);

        asyncOps++;
        fs.stat(fpath, function(err, stats){
          if(err) return error(err);

          if(stats.isDirectory()) finder(fpath);
          if(stats.isFile() && nameRe.test(file)) results.push(fpath);
          asyncOps--;
          if(asyncOps == 0) cb(null, results);
        });
      });

      asyncOps--;
      if(asyncOps == 0) cb(null, results);
    });
  }

  finder(startPath);
};