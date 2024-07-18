const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.get("/", function(req, res){
    res.send('hello')
})
server.listen(3000);
