var cp = require('child_process');
var child = cp.fork('./child_process');
child.on('message', function(msg){
  console.log('get a msg from child:', msg);
});

child.send({'sdf':{123: 2323}});

child.disconnect();