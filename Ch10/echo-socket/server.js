var express = require('express'),
	wsio = require('websocket.io');

var app = express();

//var app = express.createServer();

var ws = wsio.attach(app);
//attach the websocket to express to handle it.

app.use(express.static('public'));

ws.on('connection', function(socket){
	socket.on('message', function(msg){
		console.log(' \033[96mgot:\033[39m ' + msg);
		socket.send('pong');
	});
});

app.listen(3000);
console.log('server runing on 127.0.0.1:3000');