'use strict';

var express = require('express'),
    fs      = require('fs');
    
var app      = express(),
    port     = process.argv[2],
    filePath = process.argv[3];
    
app.get('/books', function(req, res) {
  var jsonFile = {};
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      return res.send(500);
    }
    jsonFile = JSON.parse(data);
    res.send(jsonFile);
  })
});

app.listen(port);