// var http = require('http');

// http.createServer(function(req, res) {
// 	res.writeHead(200,{'Content-type':'text/plain'});

// 	res.end('Hello');
// }).listen(1337,'127.0.0.1');

// console.log('Webserver loaded.');

var http = require('http');
var fileSystem = require('fs');

http.createServer(function(req, res) {

	fileSystem.readFile('index.html', function(err,data) {
		res.writeHead(200,{'Content-type':'text/html'});

	res.end(data);
	});
	
}).listen(1337,'127.0.0.1');

console.log('Webserver loaded.');