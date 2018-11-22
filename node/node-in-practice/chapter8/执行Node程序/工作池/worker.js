process.on('message', function(job){
  for(var i = 0; i < 100000; i++){
    process.send('finished:' + i + job);
  }
});