var express = require('express')
var app = express()
var port = process.env.port || 9696

var test = require('./js/test')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/test', function (req, res) {
  res.json(test.getData())
})

app.get('/', function (req, res) {
  res.json({test: 'Hello World!'})
})

app.listen(port, function () {
  console.log('Example app listening on port %s!', port)
})