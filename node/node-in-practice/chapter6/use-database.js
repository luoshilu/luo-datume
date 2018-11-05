var DataBase = require('./fileDB/database');

var client = new DataBase('./fileDB/test.db');

client.on('load', function(){
  var foo = client.get('foo');
  console.log(foo);
  
  // client.set('set', 'my sweet value', function(err){
  //   if(err) {
  //     return console.error(err);
  //   }
  //   console.log('write successsful');
  // });

  client.del('set');
});