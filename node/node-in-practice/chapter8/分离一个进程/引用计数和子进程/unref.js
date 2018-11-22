// 问题: detached配置分离子进程以及 使父子进程I/O中断并没有完全的分离一个子进程. 因为父进程仍然会有一个对子进程的内部引用.

// 讨论: 通过child.unref()方法告诉node不要将子进程的引用进行计数.

//

var fs = require('fs');
var cp = require('child_process');

var outFd = fs.openSync('./login.out', 'a');
var errFd = fs.openSync('./login.err', 'a');

var child = cp.spawn('./loginrun', [], {
  detached: true,
  stdio: ['ignore', outFd, errFd]
});

child.unref();// 告诉node不要将子进程的引用进行计数