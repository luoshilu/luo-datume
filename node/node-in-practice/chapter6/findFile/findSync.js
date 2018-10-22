var fs = require('fs');
var join = require('path').join;

exports.findSync = function(nameRe, startPath) {
  var results = []; // 查找结果

  function finder (path) {
    var files = fs.readdirSync(path);
    for(var i=0; i<files.length; i++) {
      var fpath = join(path, files[i]);
      var stats = fs.statSync(fpath);
      // 如果stats是一个目录，则递归
      if(stats.isDirectory()) finder(fpath);
      if(stats.isFile() && nameRe.test(files[i])) results.push(fpath); 
    }
  }
  finder(startPath);

  return results;
};