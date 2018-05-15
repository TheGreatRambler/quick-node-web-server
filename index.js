var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var app = express();
var directory = path.join(__dirname, "public");

app.use(serveStatic(directory, {
	'index': ["index.html"]
}));

app.use(function(req, res, next) {
  console.log("A 404!");
});

app.listen(80);
