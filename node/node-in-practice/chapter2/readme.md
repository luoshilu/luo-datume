- 模块

> require
> module.exports = obj

- 标准 I/O 以及 console 对象

> process 三种流 1.stdin 2.stdout 3.stderr
> console 对象 log error info warn 可使用 1>file.log 2>file.log 将内容输出到日志文件中

- 操作系统与命令行
  > 获取平台信息

1. process.arch
2. process.platform
3. process.memoryUsage() rss heapTotal heapUsed

> 获取命令行参数

1. process.stdin.resume() 标准输入流读取
2. process.argv 返回参数数组

> 退出程序

1. 执行 process.exit()会返回 0 的退出状态码,0 以外的数字都表示错误发生, 命令行执行 echo $? 可查看当前状态码
   使用 console.error() 和 process.exit() 都可用来正确地指示发生了错误的情况

> 响应信号量

1. process 是一个 EventEmitter 对象,可以对它添加监听器,系统的信号有很多种,比如 SIGHUP,POSIX 等等.
2. 使用 process.on('SIGHUP',function(){})来监听 SIGHUP 信号, process.kill(pid, "SIGHUP") 发起信号,其中 pid 是进程 id,使用 process.pid 可获取.
3. 在 shell 中,使用 kill -HUP PID 可想 pid 这个进程发起信号.若发出其它信号,那么进程会退出,比如 kill pid. (kill pid 并非杀死进程的意思,而是发出一个未知信号,使进程关闭)

- 使用 timer 延迟执行

1. 在 node 中,常使用 setTimeout setInterval 来进行 定时调用回调函数.
2. I/O 操作是异步执行的
3. 使用 process.nextTick 来延迟执行,这比 setTimeout 更有效率.
4. 在事件轮询中,时序安排的顺序为: I/0 事件,setImmediate,setInterval,process.nextTick. (在一个包含上述事件的函数中,当函数入栈时,事件的入栈顺序是按照上述排序进行的,所以 process.nextTick 成为会先执行的事件 )
