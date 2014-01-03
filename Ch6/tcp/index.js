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
	//conn is the connectiion listener
	//Creates a new TCP server. The connectionListener argument is automatically set as a listener for the 'connection' event.
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
		if(!nickname){
			if(users[data]){
				conn.write('\033[93m> nickname already in use. try again: \033[39m ');
				return; 
			} else {
				data.replace('\r\n', '');
				nickname = data;
				users[nickname] = conn;

				for(var i in users) {
					brodcast('\033[90m > ' + nickname + ' joined the room\033[39m\n');
					//users[i].write('\033[90m > ' + nickname + ' joined the room\033[39m\n');
				}
			}
		} else {
			data.replace('\r\n', '');
			for(var i in users) {
				if(i != nickname) {
					brodcast('\033[96m > ' + nickname + ':\033[39m' + data + '\n', true);
					//users[i].write('\033[96m > ' + nickname + ':\033[39m ' + data + '\n');
				}
			}
		}
	});

	conn.on('close', function(){
		count--;
		delete users[nickname];
		brodcast('\033[90m > ' + nickname + ' left the room\033[39m\n');
	});

	/*
	Exit Brodcast
	*/
	var brodcast = function(msg, exceptMyself) {
		for (var i in users) {
			if(!exceptMyself || i != nickname){
				users[i].write(msg);
			}
		}
	}

});

/*
Listening
*/
server.listen(3000, function(){
	console.log('\033[96m server listening on *:3000\033[39m');
});



