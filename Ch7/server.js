require('http').createServer(function(req, res){
	//remember the TCP use the net module and callback a coonection object
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Node.js Rock</h1>');
	//before the res.end you can write more message
	res.end('<h3>Mozila Rock!</h3>');
}).listen(3000);

console.log('Server is runing on 127.0.0.1:3000');
