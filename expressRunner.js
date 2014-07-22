#!/usr/local/bin/node
if (process.argv.length < 3) {
	console.log("Usage: expressRunner.js path [port]");
	console.log("Example: expressRunner.js ~0 3333 (hosts currect directory at localhost:3333)");
	console.log("Example: expressRunner.js path/to/your/folder (hosts path/to/your/folder at default port 3000 - localhost:3000)");

} else {

	var express = require('express');
	var app = express();
	var path = process.argv[2];
	var port = 3000;

	if (process.argv[3]) {
		port = process.argv[3];
	}

	app.use(express.static(path, '/'));

	app.listen(port);
	console.log('Hosting', path, "at localhost:" + port);

}
