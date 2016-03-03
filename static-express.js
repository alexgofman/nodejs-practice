var express = require('express'),
    app     = express(),
    path    = require('path');
    
app.listen(process.argv[2]);

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));