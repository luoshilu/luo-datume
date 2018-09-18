var pid = require("./sign.js");

// 每隔一秒发送一个信号到pid进程
setInterval(() => {
  process.kill(pid, "SIGHUP");
}, 1000);
