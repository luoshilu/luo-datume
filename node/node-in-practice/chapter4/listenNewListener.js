var util = require("util");

var events = require("events");

function EventTracker() {
  events.EventEmitter.call(this);
}

util.inherits(EventTracker, events.EventEmitter);

var eventTracker = new EventTracker();

eventTracker.on("newListener", function(name, listener) {
  // console.log(listener(132));
  console.log("Event name:", name);
});

eventTracker.on("a listener", function(val) {
    // console.log(this.listeners("a listener").length);
  //
});

// eventTracker.emit("a listener", 567);

console.log(eventTracker.listeners("a listener").length);
