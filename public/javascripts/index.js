var socket = io.connect('http://localhost:3000');
socket.on('news', function (data) {
	console.log(data);
	socket.emit('event', { my: 'data' });
});