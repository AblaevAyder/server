var express = require("express");
var bparser= require("body-parser");
var app = express();
app.use(bparser.json());
app.use(bparser.urlencoded({extended:true}))
app.get("/", function(req, res){
  var form='<!DOCTYPE html>\
  <html lang="en">\
  <head>\
    <meta charset="UTF-8">\
    <title>form</title>\
  </head>\
  <body>\
  <form class="" action="page_test" method="post">\
    <input type="text" name="text" value="">\
    <button>touch me</button>\
  </form>\
  </body>\
  </html>\
'
  res.send(form)
})

app.listen("3001", function () {
  console.log("сервер работает")
})
app.post("/page_test", function (req, res) {
console.log(req.body)
  res.send("привет от сервера вот ваш ввод: "+ req.body.text)
})
