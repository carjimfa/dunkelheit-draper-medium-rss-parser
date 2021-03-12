var express = require('express')
var http = require('http')
var app = express()
let Parser = require('rss-parser');
let parser = new Parser();

app.set('port', process.env.PORT || 3000)

app.get('/api', async (req, res) => {
    const feed = await parser.parseURL('https://medium.com/feed/dunkelheit-draper');
    res.json(feed);
})

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})