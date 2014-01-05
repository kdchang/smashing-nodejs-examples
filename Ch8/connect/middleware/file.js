var connect = require('connect');
var server = connect.createServer();

//server.use(connect.urlencoded());
//server.use(connect.json());
server.use(connect.bodyParser());
server.use(connect.static('static'));

server.use(function(req, res){
	//req.body.myinput
	if(req.method == 'POST') {
		//console.log('hi');
		console.log(req.files);
	}
}).listen(3000);
