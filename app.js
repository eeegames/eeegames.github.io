'use strict'
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    var langKor = req.acceptsLanguages('ko');
    if (langKor) res.sendFile(__dirname + '/index.html');
    else res.sendFile(__dirname + '/index.html');
});

const langs = ['ko', 'en'];
const apps = ['gyedole', 'kudole', 'gongdole', 'musicgenerator', 'screenblacker', 'ballracer'];
for (var i = 0; i < langs.length; i++) {
    /*var p = '/' + langs[i];
    app.get(p, (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });*/
    /*
    p += '/apps';
    app.get(p, (req, res) => {
        res.sendFile(__dirname + '/apps/appList.html');
    });
    p += '/';
    for (var j = 0; j < apps.length; j++) {
        app.get(p + apps[j], (req, res) => {
            res.sendFile(__dirname + '/apps/' + apps[j] + '/info.html');
        });
        app.get(p + apps[j] + '/privacy', (req, res) => {
            res.sendFile(__dirname + '/apps/' + apps[j] + '/privacy.html');
        });
    }
    */
}

app.use(express.static(__dirname + '/app-ads.txt'));

app.listen(port);
