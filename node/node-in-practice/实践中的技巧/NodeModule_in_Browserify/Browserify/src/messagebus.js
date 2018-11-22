var EventEmitter = require('events').EventEmitter;
var util = require('util');

function MessagebBus(options) {
  EventEmitter.call(this,options);
  this.on('message', this.messageReceived.bind(this));
}

util.inherits(MessagebBus, EventEmitter);

MessagebBus.prototype.messageReceived = function(message) {
  console.log('Rx:', message);
};

module.exports = MessagebBus;