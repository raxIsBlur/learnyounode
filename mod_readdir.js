// Reading the directory content of provided paths
var fs = require('fs');
var path = require('path');

var exports = module.exports = {};

exports = function(dir, filterStr, callback)
{
	fs.readdir(dir, function(err, list)	{
		if(err) return callback(err);

		list = list.filter(function(file) { 
			return path.extname(file) === '.' + filterStr 
		});

		callback(null, list);
	});
}