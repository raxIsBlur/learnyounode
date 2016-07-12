var fs = require('fs');

var pathToFile = process.argv[2];

function loadFileContentAsync(path, callback)
{
	fs.readFile(path, function(err, data) {
		if(err) console.log(err);

		if(typeof(callback) === 'function') callback(data.toString());
	});
}

function countNewLine(content)
{
	console.log(content.split('\n').length - 1);
}

loadFileContentAsync(pathToFile, countNewLine);
