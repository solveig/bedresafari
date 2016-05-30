// Node.js - Express Sample application

var express = require('express')
var app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
var path = require('path');

app.use(express.static(__dirname + '/public'));
res.sendFile(path.resolve('nogo.html'));
//res.sendFile(path.resolve('BedreSafari.html')); // implementere nogo
  
})
app.post('/', function(req, res, next) {
 console.log('post');
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port;
  console.log('bedresafari listening at http://%s:%s', host, port)
})