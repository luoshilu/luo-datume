// 模拟connect 客户端连接，以此来测试服务端
var net = require('net');
var assert = require('assert');

var clients = 0;
var expectedAssertions = 2;

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

function runTest(expectedId, done) {
  var client = net.connect(8000);
  client.on('data', function(data){
    var expected = 'welcome client:' + expectedId + '\r\n';
    assert.equal(data.toString(), expected);
    expectedAssertions--;
    client.end();
  });
  client.on('end', done);
}

server.listen(8000, function(){
  console.log('server started on port 8000');

  runTest(1, function(){
    runTest(2, function(){
      console.log("Tests finished");
      assert.equal(0, expectedAssertions);
      server.close();
    });
  });
});

// 1. 客户端和服务端能够同时运行在进程中; TCP客户端和服务端都是容易单元测试的
// 2. 如果服务端是我们无权控制的远程服务，那我们就可以创建一个mock服务，来明确表达要测试的客户端代码