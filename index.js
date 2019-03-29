var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat', function (req, res) {
  res.sendFile(__dirname + '/chat.html');
})

app.get('/game', function (req, res) {
  res.sendFile(__dirname + '/game.html');
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('go to chat', function(msg){
    socket.emit('go to chat', '/chat');
  });
  socket.on('go to game', function(msg){
    socket.emit('go to game', '/game');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});