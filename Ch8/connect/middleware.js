/*
Chapter 8 Sample use Connect Module build a static website.
*/

var connect = require('connect');

var server = connect.createServer();

server.use(connect.static(__dirname + '/website'));

// server.use(function(req, res, next){
// 	console.log('%s %s', req.method, req.url);
// 	next();
// });

// server.use(function(req, res, next){
// 	if(req.method == 'GET' && req.url.substr(-4) == '.png'){
// 		server.use(connect.static(__dirname + '/website'));
// 	} else {
// 		next();
// 	}
// });

// server.use(function(req, res, next){
// 	if(req.method == 'GET' && req.url == '/') {
// 		server.use(connect.static(__dirname + '/website'));
// 		console.log('hi');
// 	} else {
// 		next();
// 	}
// });

// server.use(function(req, res, next){
// 	res.writeHead(404);
// 	res.end('Not Found');
// });

//app.use(connect.logger('dev'));
server.listen(3000);
console.log('server is runing on 127.0.0.1:3000');	