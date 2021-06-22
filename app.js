'use strict'
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use(express.static(__dirname + '/app-ads'));

app.listen(port);
