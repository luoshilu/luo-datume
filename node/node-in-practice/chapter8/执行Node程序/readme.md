# 执行 node 程序

## 使用 node 来编写 shell 脚本

简单的使用 execFile 方法

```
cp.execFile('node', ['myapp.js', 'myarg1', 'myarg2']);
```

- 在 window 下做可执行文件

编辑一个 hello.bat 文件如下:

```
@echo off
node "hello.js" %*
```

- 在 UNIX 平台下做可执行文件

创建一个文件 hello:

```
#!user/bin/env node
console.log('hello',process.argv[2]);
```

> chmod +x hello

然后执行

> \$ ./hello luo
> hello luo

- forking node 模块

fork 作用:通过在一个独立的进程中运行一个 Node 模块,并建立一个通信通道.

常用于:

1. 处理大数据量计算
2. 共享文件描述器

```
var cp = require('child_process');
var child = cp.fork('./mychild);
```

使用 fork 方法会开放一个 IPC 通道, stdio 默认配置:

```
stdio: [0,1,2,'ipc'];
```

默认情况下,所有的输入输出都是继承自父进程. 并不会有 child.stdin, child.stdout,child.stderr, 如何想提供一种和 spawn 一样的默认 I/O 配置(想要得到 child.stdin 这样的对象),那么可以使用 silent 选项

```
var cp = require('child_process');
var child = cp.fork('./myChild',{silent: true});
```

> node 的 IPC 通道使用 UNIX 域套接字.或者 window 的命名管道.

- 与 fork node 模块通信
  子进程接收父进程消息和发送消息:

```
// 接收父进程的消息并发送该消息给父进程
process.on('message', function(msg){
  process.send(msg);
});
```

父进程接收和发送消息

```
var cp = require('child_process');
var child = cp.fork('./child');
child.on('message', function(msg){
  process.send('from child:', msg);
});

child.send('sending a string to child');
```
