/*Client-Side*/
var http = require('http'), 
	qs = require('querystring');

var send = function(theName){
	http.request({
		host: '127.0.0.1',
		port: '3000',
		url: '/',
		method: 'POST'
	}, function(res){
		res.setEncoding('utf8');
		res.on('end', function(){
			console.log('\n \033[90m request complete!\033[39m');
			process.stdout.write('\nPlase Key In your name: ');
		});
	}).end(qs.stringify({name: theName}));
};

process.stdout.write('\nPlase Key In your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(name){
	send(name.replace('\n', ''));
});



