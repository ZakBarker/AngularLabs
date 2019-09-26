const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const url = "mongodb://localhost:27017";
MongoClient.connect(url, { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) {
        return console.log(err)
    }
    const dbName = "mydbb";
    const db = client.db(dbName);

    require("./api/add.js")(db, app);
    require("./api/read.js")(db, app);
    require("./api/remove.js")(db, app, ObjectID);
    require("./api/update.js")(db, app, ObjectID);
    require("./api/item.js")(db, app, ObjectID);


    require("./listen.js")(app);
});

module.exports = app;