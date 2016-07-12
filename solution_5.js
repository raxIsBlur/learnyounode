var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extToFilter = process.argv[3];

function getDirectoryFiles(dir, ext, callback) {
	fs.readdir(dir, function(err, list) { 
		if (err) console.log(err);
		
		if(typeof(callback) === 'function') callback(ext, list);
	});
}

function filterExtension(ext, fileList) {

	fileList.forEach(function(file) { 
		if(path.extname(file) === '.' + ext) console.log(file); 
	});
}

getDirectoryFiles(directory, extToFilter, filterExtension);