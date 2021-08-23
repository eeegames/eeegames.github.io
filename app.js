'use strict'
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    var langKor = req.acceptsLanguages('ko');
    if (langKor) res.redirect('/ko');
    else res.redirect('/en');
});

const langs = ['ko', 'en'];
const apps = ['gyedole', 'kudole', 'gongdole', 'musicgenerator', 'screenblacker', 'ballracer'];
for (const l in langs) {
    p = '/' + l;
    app.get(p, (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    p += '/apps';
    app.get(p, (req, res) => {
        res.sendFile(__dirname + '/apps/appList.html');
    });
    p += '/';
    for (const a in apps) {
        app.get(p + a, (req, res) => {
            res.sendFile(__dirname + '/apps/' + a + '/info.html');
        });
        app.get(p + a + '/privacy', (req, res) => {
            res.sendFile(__dirname + '/apps/' + a + '/privacy.html');
        });
    }
}

app.use(express.static(__dirname + '/app-ads.txt'));

app.listen(port);
