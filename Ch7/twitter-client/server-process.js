var qs = require('querystring');

/*Server-Side*/
require('http').createServer(function(req, res){
	var body = '';
	req.on('data', function(chunk){
		body += chunk;
	});
	req.on('end', function(){
		res.writeHead(200);
		res.end('Done');
		console.log('\n got name \033[90m' + qs.parse(body).name + '\033[39m\n');
	});
	//res.writeHead(200, {'Content-Type': 'text/html'});
}).listen(3000);
