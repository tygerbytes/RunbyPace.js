
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Welcome to the RunbyPace.js API!');
});

app.listen(port, function() {
  console.log('Running on port: ' + port);
});

module.exports = app;
