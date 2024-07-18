//npx nodemon app.js is the command to run
const express = require('express');
const app = express();
//This is the defauly code to configure sockket.io
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
app.set("view engine", 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.send('hello')
})
server.listen(3000);
