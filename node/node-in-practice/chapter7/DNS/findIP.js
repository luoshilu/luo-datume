var dns = require('dns');

dns.lookup('www.baidu.com', function(err, address){
  if(err){
    console.log('error:',err);
  }
  console.log("Addresses:", address); // Addresses: 58.217.200.112
});


// dns.resolve('www.baidu.com', function(err, address){
//   if(err){
//     console.log('error:',err);
//   }
//   console.log("Addresses:", address); // Addresses: [ '58.217.200.113', '58.217.200.112' ]
// });