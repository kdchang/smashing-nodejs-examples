var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (socket) {
  console.log('con!');
  socket.on('join', function (name) {
  	socket.nickname = name;
    console.log(name);
    socket.broadcast.emit('announcement', name + ' ' + 'join the chat');
  });

  socket.on('text', function(msg){
  	socket.broadcast.emit('text', socket.nickname, msg);
  	//fn(Data.now());
  });
});
