/*
Chapter 8 request-speed-sample
*/

var connect = require('connect')
	,time = require('./request-time');

var server = connect.createServer();

server.use(connect.logger('dev'));

server.use(time({time: 500}));

server.use(function(req, res, next){
	if(req.url == '/a') {
		res.writeHead(200);
		res.end('Fast!');
	} else {
		next();
	}
});

server.use(function(req, res, next){
	if(req.url == '/b') {
		setTimeout(function(){
			res.writeHead(200);
			res.end('Slow!');
		}, 1000);
	} else {
		next();
	}
});

server.listen(3000);
