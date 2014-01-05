var connect = require('connect'),
	users = require('./users');
	//Redis
	RedisStore = require('connect-redis')(connect);

var server = connect(
	connect.logger('dev'),
	connect.bodyParser(),
	connect.cookieParser(),
	connect.session({secret: 'my app secret'})	,
	function(req, res, next) {
		if(req.url == '/' && req.session.logged_in) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(
				'welcome back, <h3>' + req.session.name + '</h3>' +
				'<a href="/logout">Logout</a>'
				);
		} else {
			next();
		}
	},
	function(req, res, next) {
		if(req.url == '/' && req.method == 'GET') {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end([
				'<form action="/login" method="POST">',
					'<filedset>',
						'<lengend>Please log in</legend>',
						'<p>User: <input type="text" name="user"></p>',
						'<p>Password: <input type="password" name="password"></p>',
						'<button>Submit</button>',
					'</filedset>',
				'</form>'
			].join(''));
		} else {
			next();
		}
	},
	function(req, res, next){
		if(req.url == '/login' && req.method == 'POST') {
			res.writeHead(200);
			if(!users[req.body.user] || req.body.password != users[req.body.user].password) {
				console.log(req.body.user);
				console.log(req.body.password);
				console.log(users['user']);
				res.end('wrong username/password');
			} else {
				req.session.logged_in = true;
				req.session.name = users[req.body.user].name;
				res.end('Authenticated');

			}
		} else {
			next();			
		}
	},
	function(req, res, next){
		if(req.url == '/logout') {
			req.session.logged_in = false;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('Logged Out');
		} else {
			next();
		}
	}
);

server.use(connect.session({store: new RedisStore, secret: 'my secret'}))

server.listen(3000);


