var stream = require('stream');
var util = require('util');
var fs = require('fs');

util.inherits(MyTransform, stream.Transform);

function MyTransform() {
  stream.Transform.call(this);
  this.wartermark = process.memoryUsage().rss;

  this.key = {
    is: true,
    val: ''
  };
  this.value = {
    is: false,
    val: ''
  };
  this.json = {};
  this.que = [];
  this.queLen = 0;
}

// [{a:b},{c:d}] 转 {a:b,c:d}
MyTransform.prototype._transform = function(chunk, encoding, cb){

  if(!chunk) {
    if(this.queLen > 0 || this.key.val || this.value.val){
      console.error('error2');
    }else{
      this.push(null);
    }
  }
  chunk = chunk.toString();
  
  var len = chunk.length;
  var inx;

  var i = 0;
  if(chunk){
    for(;i < len;i++){
      
      inx = chunk[i];

      if(inx == ',') {
        if(this.que[this.queLen-1] != '[') {
          break;
        }
        this.que.push(inx);
        this.queLen++;
        continue;
      }

      if(inx == `"`) {
        if(this.queLen != 0 && this.que[this.queLen-1] == inx) {
          this.que.splice(this.queLen-1, 1);
          this.que.length = --this.queLen;
        }else{
          this.que.push(inx);
          this.queLen++;
        }
        continue;
      }

      if(inx == `]`){
        if(this.que[this.queLen-1] == '[') {
          this.que.splice(this.queLen-1, 1);
          this.que.length = --this.queLen;
          continue;
        }else{
          console.error('error1');
          break;
        }
      }
      if(inx == `}`){
        if(this.que[this.queLen-1] == '{') {
          this.que.splice(this.queLen-1, 1);
          this.que.length = --this.queLen;

          this.json[this.key.val] = this.value.val;
          this.key = {is: true,val: ''};
          this.value = {is: false,val: ''};
          continue;
        }else{
          console.error('error1');
          break;
        }
      }
      if(inx == `[`){
        this.que.push(inx);
        this.queLen++;
        continue;
      }

      if(inx == `{`){
        if(this.que[this.queLen-1] == ',') {
          this.que.splice(this.queLen-1, 1);
          this.que.length = --this.queLen;
        }
        this.que.push(inx);
        this.queLen++;
        continue;
      }

      if(inx == `:`){
        this.key.is = false;
        this.value.is = true;
        continue;
      }

      if(this.key.is) { this.key.val += inx; }
      if(this.value.is) { this.value.val += inx; }
    }

  }

  this.push(JSON.stringify(this.json));
  cb();
};

var trans = new MyTransform();

var readStream = fs.createReadStream('out.json');

var writeStream = fs.createWriteStream('outjsonTransform.json',{encoding: 'utf-8'});
readStream.pipe(trans).pipe(writeStream);