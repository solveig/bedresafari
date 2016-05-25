// Node.js - Express Sample application

var express = require('express')
var app = express()

app.get('/', function (req, res) {
var path = require('path');
res.sendFile(path.resolve('BedreSafari.html'));
//res.sendFile('/BedreSafari.html');
// not found res.sendFile('/main.html');
//  OK res.send('Hello World!')
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})