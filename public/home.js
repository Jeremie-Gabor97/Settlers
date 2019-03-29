//$(function () {
    var socket = io();
    $( "#chatButton" ).click(function() {
      socket.emit('go to chat');
    });
    $( "#gameButton" ).click(function() {
      socket.emit('go to game');
    });
    socket.on('go to chat', function(page) {
      window.location.href = page;
    });

    socket.on('go to game', function(page) {
        window.location.href = page;
      });

    function getSocket () {
        return socket;
    }
//});