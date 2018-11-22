var cp = require('child_process');

cp.exec('cat sort_uniq.txt | sort | uniq', function(err,stdout, stderr) {
  console.log(stdout);
});