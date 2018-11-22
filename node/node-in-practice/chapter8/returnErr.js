var cp = require('child_process');

cp.execFile('ls', ['nofolder'],function(err, stdout, stderr){
  if(err) console.log(err);
  console.log('stdout', stdout);
  console.log('stderr', stderr);
  
});