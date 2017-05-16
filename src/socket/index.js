var io = require('socket.io');



module.exports = function(server){

	io(server).on('connection', function (socket) {
	  var i = 0;
	  setInterval(function(){
	    socket.emit('news', { hello: i++ });
	  },1000);
	  socket.on('event', function (data) {
	    console.log(data);
	  });
	});
};
