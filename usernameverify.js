var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index3.html');
});
users = [];
io.on('connection', function(socket){
  console.log('A user connected');
  socket.on('setUsername', function(data){
    if(users.indexOf(data) > -1){
      users.push(data);
      socket.emit('userSet', {username: data});
    }
    else{
      socket.emit('userExists', data + ' username is taken! Try some other username.');
    }
  })
});
http.listen(3000, function(){
  console.log('listening on localhost:3000');
});