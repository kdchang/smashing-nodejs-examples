/*
Chapter #8 cookie
*/
var connect = require('connect');

var server = connect.createServer();

server.use(connect.cookieParser());

server.use(function(req, res, next){
	req.cookies['secret1'] = "value1";
	//req.cookies.secret2 = "value2";
	res.writeHead(200, {'Content-Type': 'text/html'});
	var json = JSON.stringify(req.cookies);
	res.end('HI NODE' + json);
}).listen(3000);

