var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/'));

// Load runner
app.get('/', function(req, res){
    fs.createReadStream('./runner.html').pipe(res);
});

app.listen(3000);


