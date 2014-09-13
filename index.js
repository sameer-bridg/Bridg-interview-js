//var express = require('express');
//var app = express();
//var http = require('http');
//var fs = require('fs');
//
//app.use(express.static(__dirname + '/'));
//
//// Load runner
//app.get('/', function(req, res){
//    fs.createReadStream('./runner.html').pipe(res);
//});
//
//app.listen(3000);
//
//

var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
    fs.createReadStream('./runner.html').pipe(res);
}).listen(8000);
