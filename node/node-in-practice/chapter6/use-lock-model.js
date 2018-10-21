var locker = require('./lock-model');

locker.lock(function(err){
  if(err) throw err;
  console.log('locking');
  
  setTimeout(function(){
    locker.unlock(function(){

    });
  }, 2000);
});