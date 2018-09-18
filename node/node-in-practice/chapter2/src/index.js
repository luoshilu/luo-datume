process.stdin.resume();
process.stdin.setEncoding("UTF-8");

process.stdin.on("data", function(text) {
  let ifNumber = parseInt(text);

  console.log(isNaN(ifNumber));

  if (!isNaN(ifNumber)) {
    console.error(text + " is Number, you should input a type of String");
  } else {
    console.log("success:", text);
  }
  // process.stdin.write(text.toUpperCase());
});
