var MessageBus = require('./messagebus');

var messagebus = new MessageBus();

var $ = require('jquery');

messagebus.on('message', function(msg){
  $("#message").append('<p>'+ msg + '</p>');
});

$(function(){
  messagebus.emit('message', 'hello from b');
});