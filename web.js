var express = require('express');
var fs = require('fs');
var buf = new Buffer(128);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('index.html');
  buf.toString();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
})
