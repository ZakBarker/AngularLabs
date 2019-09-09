
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json())

var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));


require('./listen.js')(app, path);

// app.post('/login', function(req, res){
require('./routes/account.js')(app, path);
require('./routes/login.js')(app, path);
// })