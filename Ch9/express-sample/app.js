
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');

var path = require('path');
//

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
/*
In many environments (e.g. Heroku), and as a convention, 
you can set the environment variable PORT to tell your web server what port to listen on.
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
//it's a fast path to a favicon, typically one has static() lower in the stack so that routes can intercept if needed, however this is rarely needed for a favicon. favicon(__dirname + '/path/to/favicon.ico')
app.use(express.logger('dev'));
/*
Request body parsing middleware supporting JSON, urlencoded, and multipart requests. 
This middleware is simply a wrapper for the json(), urlencoded(), and multipart() middleware.
*/
app.use(express.json());
app.use(express.urlencoded());

app.use(express.methodOverride());
app.use(app.router);
/*
The app.routes object houses all of the routes defined mapped by the associated HTTP verb. 
This object may be used for introspection capabilities, for example Express uses this internally not only for routing but to provide default OPTIONS behaviour unless app.options() is used. 
Your application or framework may also remove routes by simply by removing them from this object.
*/
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
