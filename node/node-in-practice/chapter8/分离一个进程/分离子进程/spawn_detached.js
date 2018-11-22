// 为什么要分离子进程

// 1. 需要长时间执行一个外部应用
// 2. 为了保证子进程不受父进程的影响(当父进程终结时,子进程也会终结),需要将子进程分离独立存在,使得子进程不会因父进程终结而终结.


// 方法: 添加detached配置选项

var cp = require('child_process');

var child = cp.spawn('./longrun', [], {detached: true});


