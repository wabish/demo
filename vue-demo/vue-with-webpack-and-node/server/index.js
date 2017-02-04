var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: false 
}));

app.post('/test', function(req, res) {
  var json = {
    name: 'cobish',
    age: 24
  };
  res.send(json);
});

console.log('start server');
app.listen(8888);