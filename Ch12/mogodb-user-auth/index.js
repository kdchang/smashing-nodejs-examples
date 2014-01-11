var express = require("express");
var app = express();
var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017);

new mongodb.Db('my-website', server).open(function(err, client){
	if(err) throw err;
	console.log('\033[96m + \033[39m connected to mongodb');
	app.users = new mongodb.collection(client, 'users');
	app.listen(3000, function(){
		console.log('\033[96m + \033[39m app listening on *:3000');
	});
});

app.use(express.urlencoded());
//app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'my secret'}));

app.set('view engine', 'jade');
app.set('view options', {layout: false});

app.get('/', function(req, res){
	res.render('index', {authenticated: false});
});

app.get('/login', function(req, res){
	res.render('login');
});

app.get('/signup', function(req, res){
	res.render('signup');
});

console.log('server is runing on 127.0.0.1:3000');