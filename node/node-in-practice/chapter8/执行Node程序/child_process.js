process.on('message', function(msg){
  console.log('get a msg from parent:', msg);
  process.send(msg);
});