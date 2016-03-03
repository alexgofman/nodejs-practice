var http = require('http'),
    map  = require('through2-map');
    
http.createServer(function(inStream, outStream) {
  if(inStream.method == 'POST') {
        inStream.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(outStream);
    }
}).listen(process.argv[2]);