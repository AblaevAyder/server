var express = require("express");
var app = express();

app.get("/", function(req, res){
  var form="<!DOCTYPE html>\
  <html lang="">\
  <head>\
    <meta charset="UTF-8">\
    <title>form</title>\
  </head>\
  <body>\
  <form class=""action="" method="post">\
    <input type="text" name="" value="">\
    <button>touch me</button>\
  </form>\
  </body>\
  </html>\
  "
  res.send(form)\
})

app.listen("3001", function () {
  console.log("server working")
})
app.post("/page_test", function (req, res) {
  res.send("ghbdtn jn cthdthf 'rcghtcc'")
})
