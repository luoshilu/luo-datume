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
