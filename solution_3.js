var fs = require('fs');

var pathToFile = process.argv[2];

function loadFileContent(path) { 
	return fs.readFileSync(path).toString(); 
}

function countNewLine(content) {
	return content.split('\n').length - 1;
}

console.log(countNewLine(loadFileContent(pathToFile)));
