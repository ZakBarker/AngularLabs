const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../workshop4/dist/workshop4/')));

require('./routes/apiAuth.js')(app, path);

require('./listen.js')(app, path);