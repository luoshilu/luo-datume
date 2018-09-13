let Writable = require("stream").Writable;

// let util = require('util');

class CountStream extends Writable {
  constructor(matchText, option) {
    super();
    this.count = 0;
    this.matcher = new RegExp(matchText, "ig");
  }
  _write(chunk, encoding, cb) {
    let matchers = chunk.toString().match(this.matcher);
    if (matchers) {
      this.count += matchers.length;
    }
    cb();
  }
  end() {
    this.emit("total", this.count);
  }
}

module.exports = CountStream;
