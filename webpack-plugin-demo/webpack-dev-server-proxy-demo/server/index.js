var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/cobish', function (req, res) {
    res.send({
      data: 'hello cobish'
    });
});

app.post('/pt/wabish', function (req, res) {
    res.send({
      data: 'hello wabish'
    });
});

console.log('start server');
app.listen(8888);