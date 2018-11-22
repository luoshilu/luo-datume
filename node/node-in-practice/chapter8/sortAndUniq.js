var cp = require('child_process');

var cat = cp.spawn('cat',['sort_uniq.txt']);
var sort = cp.spawn('sort');
var uniq = cp.spawn('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);

// var cp = require('child_process');
// var fs = require('fs');
// var readStream = fs.createReadStream('sort_uniq.txt');

// var sort = cp.spawn('sort');
// var uniq = cp.spawn('uniq');

// readStream.pipe(sort.stdin);
// sort.stdout.pipe(uniq.stdin);
// uniq.stdout.pipe(process.stdout);