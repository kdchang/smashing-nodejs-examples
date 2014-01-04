/*
Chapter 7 HTTP Sample
*/
var qs = require('querystring');

require('http').createServer(function(req, res){
	if(req.url == '/'){
		//Init the web form page
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form method="post" action="/url" name="form">');
		res.write('<fieldset>');
		res.write('<div><h2>Please Key in your name</h2></div>');
		res.write('<div><label for="url">Name : <input id="url" type="text" name="name"></div>');
		res.write('<div><input type="submit"></div>');
		res.write('</fieldset>');
		res.end('</form>');
	} else if (req.url == '/url' && req.method == 'POST') {
		//Handle the post form submit
		var body = '';
		req.on('data', function(chunk){
			body += chunk;
		});
		req.on('end', function(){
			res.writeHead(200, {'Content-Type': 'text/html'});
			//lower case
			res.write(req.headers['content-type']);
			res.write(body);
			res.end('I konw, Your name is <span>' + qs.parse(body).name + ' !</span>');
		});
	} else {
		res.writeHead(404);
		res.end('Web is not found');	
	}
}).listen(3000);

console.log('server is runing on 127.0.0.1:3000');