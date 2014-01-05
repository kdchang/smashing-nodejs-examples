/*
Chapter 8 Sample use HTTP API & File API to build a static website.
*/
var http = require('http'),
	fs = require('fs');

var server = http.createServer(function(req, res){
	if(req.method == 'GET' && req.url.substr(-4) == '.png'){
		fs.stat(__dirname + req.url, function(err, stat){
			if(err || !stat.isFile()) {
				res.writeHead(404);
				res.end('Not Head');
				return;
			}
			serve(__dirname + req.url, 'image/png');
			//serve(__dirname + req.url, 'application/png');
		});
	} else if (req.method == 'GET' && req.url == '/') {
		serve(__dirname + '/index.html', 'text/html');
	} else {
		res.writeHead(404);
		res.end('Not Found');
	}

	function serve(path, type) {
		res.writeHead(200, {'Content-Type': type});
		fs.createReadStream(path).pipe(res);
	};
	/*
		fs.createReadStream(path).on('data', function(data){
			res.write(data);
		}).on('end', function(){
			res.end();
		})
	*/
});

server.listen(3000);
console.log('server is runing on 127.0.0.1:3000');	