const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const sockets = require("./socket.js");


const PORT = 3000;

app.use(cors());

sockets.connect(io, PORT)

let server = http.listen(3000, function(){
    console.log("Server up");
})
