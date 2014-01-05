/*
Chapter 8 Sample use Connect Module build a static website.
*/
var connect = require('connect');

var server = connect.createServer();

server.use(connect.static(__dirname + '/website'));
//middlewre is like a simple javasctipt function

server.listen(3000);

console.log('server is runing on 127.0.0.1:3000');	