var cp = require('child_process');

cp.execFile('./hello', ['luo'], function(err, stdout){
  console.log(stdout);
});