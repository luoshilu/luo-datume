// var finder = require('./findSync');

// try {
//     var results = finder.findSync(/index.*/, '../../chapter5/');
//     console.log(results);
//   } catch (err) {}
  
var finder = require('./find');

finder.find(/index.*/, '../../chapter5/', function(err, results){
  if(err) return console.log(err);
  
  console.log(results);
});