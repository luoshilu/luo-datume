// 问题: 如果不强制终结正在运行的node程序,就会发现父进程一直处于活跃状态,直到子进程结束. 因为子进程的I/O和父进程是相互连接的.

// 讨论: stdio选项定义了子进程的I/O连接到一个具体的地方. 默认 stdio 值为 'pipe'. 其实stdio的配置是一个数组,该默认值展开后等价于:

// stdio: ['pipe','pipe','pipe'];

// 这三个分别代表 stdin, stdout, stderr .

// 有两种方式,可以解决我们的问题
// 1. 强行摧毁所有创建的流
//  child.stdin.destroy.destroy()
//  child.stdout.destroy.destroy()
//  child.stderr.destroy.destroy()

// 2. ignore stdin 流
var fs = require('fs');
var cp = require('child_process');

var outFd = fs.openSync('./login.out', 'a');
var errFd = fs.openSync('./login.err', 'a');

var child = cp.spawn('./loginrun', [], {
  detached: true,
  stdio: ['ignore', outFd, errFd]
});