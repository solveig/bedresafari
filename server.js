// Node.js - Express Sample application

var express = require('express')
var app = express()

app.get('/', function (req, res) {
var path = require('path');
   app.use(express.static(__dirname + '/public'));
res.sendFile(path.resolve('nogo.html'));
res.sendFile(path.resolve('BedreSafari.html')); // OK
//res.sendFile(path.resolve('BedreSafari.html')); // OK
 
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})