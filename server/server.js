var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('./client'));

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('8000 is running');
})