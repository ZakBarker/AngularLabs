// Import express.js
var express = require('express');
var app = express();

// Import path
var path = require('path');

// Import body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set landing folder for server
app.use(express.static(__dirname + '/www'));

//Listen for server and create routes for login & account
require('./listen.js')(app, path);
require('./routes/login.js')(app, path);
require('./routes/account.js')(app, path);
require('./routes/api-log')(app, path);