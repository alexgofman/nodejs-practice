var http = require('http'),
    fs   = require('fs');
    
var server = http.createServer(function(req, res) {
  var dst = fs.createReadStream(process.argv[3]);
  dst.pipe(res);
})

server.listen(process.argv[2]);