var path = require("path");
var express = require("express");
var app = express();

var dir = path.join(__dirname, "./");

app.use(express.static(dir));

app.listen(3000, () => console.log("Listening on http://localhost:3000/"));

