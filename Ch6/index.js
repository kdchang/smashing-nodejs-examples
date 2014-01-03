/**
Chapter 6 #TCP
**/

/*
Module
Trace the user count
*/
var count = 0, 
	users = {};

var net = require('net');

var server = net.createServer(function(conn){
	//handle the connection
	var nickname;
	conn.setEncoding('utf8');
	console.log('\033[90m  new connection!\033[39m');
	conn.write('\n>welcome to \033[92m node-chat\033[39m!'
	 	+ '\n>' + count + ' ' +'other people are connect at this time'
		+ '\n> please write your name and press enter : \n'
	);
	count++;

	conn.on('data', function(data){
		data.replace('\r\n', '');
		console.log(data);
	});

	conn.on('close', function(){
		count--;
		delete users[nickname];
	});

});

/*
Listening
*/
server.listen(3000, function(){
	console.log('\033[96m server listening on *:3000\033[39m');
});

