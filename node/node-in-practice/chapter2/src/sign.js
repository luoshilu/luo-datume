// process.stdin.resume();

process.on("SIGHUP", function() {
  console.log("reloading configuration...");
  console.log("PID:", process.pid);
});

module.exports = process.pid;
