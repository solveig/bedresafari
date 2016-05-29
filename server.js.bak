// Node.js - Express Sample application

var express = require('express')
var app = express()

app.get('/', function (req, res) {
var path = require('path');
   app.use(express.static(__dirname + '/public'));
//res.sendFile(path.resolve('nogo.html'));
res.sendFile(path.resolve('BedreSafari.html')); // implementere nogo
//res.sendFile(path.resolve('BedreSafari.html')); // OK teste amp se Copy of bedreSafari
 
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port;
  console.log('bedresafari listening at http://%s:%s', host, port)
})