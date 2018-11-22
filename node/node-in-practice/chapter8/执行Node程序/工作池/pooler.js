var cp = require('child_process');
var cpus = require('os').cpus().length;

module.exports = function(workModule){
  var awatingPool = []; // 当工作池已满时,后续工作进入等待
  var readyPool = []; // 已就绪的工作列表
  var poolSize = 0; // 工作者进程数量

  return function doWork(job, cb) {
    if(!readyPool.length && poolSize > cpus){ // 没有空闲的工作者进程且poolSize达到了限制
      return awatingPool.push([workModule, job, cb]);
    }

    var child;
    if(readyPool.length){
      child = readyPool.shift();
    }else{
      poolSize++;
      child = cp.fork(workModule);
    }

    var cbTriggered = false; // 用于记录工作结束, 防止进程结束后还执行退出回调或者错误回调
    child.removeAllListeners()
         .once('error', function(err){
           if(!cbTriggered){
             cb(err);
             cbTriggered = true;
           }
           child.kill();
          })
          .once('exit', function(code){
            if(!cbTriggered){
              cb(new Error('child exited with code:' + code));
            }
            poolSize--;
            var childIdx = readyPool.indexOf(child);
            if(childIdx > -1) readyPool.splice(childIdx, 1); // 将任务从readyPool移除
         })
         .once('message', function(msg){
           cb(null, msg);
           cbTriggered = true;
           readyPool.push(child);
           if(awatingPool.length){
             setImmediate.apply(null, awatingPool.shift());
           }
         })
         .send(job);
  };
};