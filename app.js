var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("привет от Cервера")})

app.listen("3000");
