var readDir = require('./solution_6_loadModule');

var pathToFile = process.argv[2];
var extToFilter = process.argv[3];

readDir(pathToFile, extToFilter, function(err, data) {
	if(err) console.log(err);

	data.forEach(function(dataItem) { console.log(dataItem)});
});
