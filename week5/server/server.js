const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const sockets = require('./socket');
const server = require("./listen");

const PORT = 3000;

app.use(cors());

sockets.connect(io, PORT);

server.listen(http, PORT);

app.use(express.static(__dirname + "../chat/dist/chat"));