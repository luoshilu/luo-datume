const cheerio = require('cheerio');
const fs = require('fs');

fs.readFile('./index.html','utf-8', function(err, html){
  let $ = cheerio.load(html);
  let releases = $('.test');
  releases.each(function(i,ele) {
    console.log('test:',ele.name);
  });
});