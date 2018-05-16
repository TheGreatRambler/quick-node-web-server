var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var errorhandler = require('express-error-handler');
var compression = require('compression');
var app = express();
var server = require('http').createServer(app);
var directory = path.join(__dirname, "public");

app.use(compression({
	level: 5
}));

app.use(serveStatic(directory, {
	'index': ["index.html"]
}));

app.use(errorhandler({
	server: server
}));

server.listen(80);
