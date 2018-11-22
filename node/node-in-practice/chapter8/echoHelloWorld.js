var cp = require('child_process');

cp.execFile('node', ['-v'],function(err, stdout, stderr){
  if(err) console.log(err);
  console.log('stdout', stdout);
  console.log('stderr', stderr);
  
});