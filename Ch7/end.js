require('http').createServer(function(req, res){
	res.writeHead(200);
	res.write('hello');
	setTimeout(function(){
		res.end('world');
	}, 500);
}).listen(3000);