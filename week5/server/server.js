const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../chat/dist/chat/")));



require("./listen.js")(app, path);