
// 创建一个 TCP 服务
var net = require('net');

var clients = 0;

var server = net.createServer(function(client){
  clients++;
  var clientId = clients;
  console.log("client connected:", clientId);

  client.on('end', function(){
    console.log('client disconnetcted:', clientId);
  });

  client.write('welcome client:' + clientId + '\r\n');
  client.pipe(client); 
});

server.listen(8000, function(){
  console.log('server started on port 8000');
});