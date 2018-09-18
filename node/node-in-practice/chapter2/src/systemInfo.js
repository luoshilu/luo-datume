console.log("系统信息:");

console.log("操作系统:" + process.platform);

console.log("位数:" + process.arch);

console.log("内存信息:");

console.log(" -常驻内存大小:" + process.memoryUsage().rss);
console.log(" -动态分配可用内存:" + process.memoryUsage().heapTotal);
console.log(" -已经使用的堆大小:" + process.memoryUsage().heapUsed);
