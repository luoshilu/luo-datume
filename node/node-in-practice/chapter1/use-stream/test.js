let assert = require("assert");
let CountStream = require("./countstream");
let fs = require("fs");

let passed = 0;

let countstream = new CountStream("example");
countstream.on("total", count => {
  assert.equal(count, 1);
  passed++;
});

fs.createReadStream("./example.txt").pipe(countstream);

process.on("exit", () => {
  console.log("Assertions passed：" + passed);
});
