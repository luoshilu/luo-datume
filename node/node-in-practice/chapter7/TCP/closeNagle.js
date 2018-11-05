
var net = require('net');

var server = net.createServer(function(client){
  client.setNoDelay(true);
  client.write('234243324433334342', 'binary'); // 服务端数据 -> 客户端
  console.log('server connected');
  
  client.on('end', function(){
    console.log('server disconnected');
    server.unref();
  });

  client.on('data', function(data){ // 客户端的数据 -> 服务端
    process.stdout.write(data.toString());
    // client.write(data.toString());
  });
});

server.listen(8000, function(){
  console.log('server bound');
});