var express = require("express")
var app = express()
app.get("/", function(req, res)){
  res.send("привет от сервера")
})
app.listen("3000")
