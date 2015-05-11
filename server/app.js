var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening to port: ", port);
});

app.use(bodyParser.json());
app.use('/', index);
module.exports = app;

