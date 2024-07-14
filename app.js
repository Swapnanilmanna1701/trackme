const express = require('express');
const app = express();
app.get("/", function(req, res){
    res.send('hello')
})
app.listen(3000);
//3000 is the port number by default
// just for github
//commenting out
//commenting for reference
