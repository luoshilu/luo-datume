var events = require("events");
var util = require("util");
var domain = require("domain");
var audioDomain = domain.create();

function AudioDevice() {
  events.EventEmitter.call(this);
  this.on("play", this.play.bind(this));
}

util.inherits(AudioDevice, events.EventEmitter);

AudioDevice.prototype.play = function() {
  console.log("AudioDevice play....");

  this.emit("errer", "not implemented yet");
};

function MusicPlayer() {
  events.EventEmitter.call(this);

  this.audioDevice = new AudioDevice();
  this.on("play", this.play.bind(this));

  this.emit("errer", "It's error1");
}
util.inherits(MusicPlayer, events.EventEmitter);

MusicPlayer.prototype.play = function() {
  this.audioDevice.emit("play");
  console.log("playing...");
  // this.emit("errer", "It's error2");
};

audioDomain.on("errer", function(err) {
  console.log("audioDomain error:", err);
});

// audioDomain.run(function() {
var musicPlayer = new MusicPlayer();
musicPlayer.play();
// });
