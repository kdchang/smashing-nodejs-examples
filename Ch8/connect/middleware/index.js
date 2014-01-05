/*
1. static
	(1)server.use('/image', connect('./img'));
	(2)server.use('./js', connect.static('/path/to/bundle', {maxAge: 10000000000}));
	(3)server.use(connect.static('/path/to/resources', {hidden: ture}));

2. query
	(1)server.use(function(){
		//req.url == '/blog-posts?page=5'
	});
	(2)server.use(connect.query);
	(3)server.use(function(req, res){
		//req.query.page == '5'
	});

3. logger
(1)default(2)dev(3)short(4)tiny
server.use(connect.logger('dev'));

Ex:
var connect = require('connect');
connect.create(
	connect.logger('dev'),
	function(req, res){
		res.writeHead(200);
		res.end('Hello World');
	}
).listen(3000);

(2)
server.use(connect.logger(':method :remote-addr'));

server.use(connent.logger('type is :res[content-type], length is' + 
':res[content-length] and it took :response-time ms.'))

Token :
:req[header](ex:req[Accept])
:res[header](ex:res[Content-Length])
:http-version
:response-time
:remote-addr
:date
:method
:url
:refferrer
:user-agent
:status

Cusomer Token
connect.logger.token('type', function(req, res){
	return req.header['content-type'];
});

4. body parser
server.use(connect.bodyparser());

server.use(function(req, res){
	//req.body.myinput
});

*upload file

formidable

5. cookie

6. session

7.methodOverride

// use before middleware
server.use(connect.methodOverride()) 
make the old browser to mimic the PUT, DELETE, PATCH 

8. basicAuth
connect.basicAuth(function(user, pass, fn){
	process.stdout.write();
	process.once('data', function(data){
		if(data[0] == 'y'){
			fn(null, {username: user});
		}
		else {
			fn(new Error('unauthorized'))
		}
	});
})
*/

