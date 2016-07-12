// // console.log(process.argv);

// var sum = 0;

// for (var i = 2; i < process.argv.length; i++) 
// {
// 	sum += parseInt(process.argv[i]);
// }

// console.log(sum);

var fs = require('fs');

// var filePath = process.argv[2];

// function readFile()
// {
// 	var buffer = fs.readFileSync(filePath);
// 	return buffer.toString();
// }

// function countNewline(fileContent)
// {
// 		var arr = fileContent.split('\n');
// 		console.log(arr.length - 1);
// }

// countNewline(readFile());


// function readFile(path, callback)
// {
// 		fs.readFile(path, function(err, data)
// 		{
// 			if(err) throw err;

// 			callback(data.toString());
// 		});
// }

// function countNewline(content)
// {	
// 	var contentArr = content.split('\n');

// 	console.log(contentArr.length - 1);
// }

// readFile(filePath, countNewline);

// var filepath = process.argv[2];
// var ext = process.argv[3];

// function getDirContent(path, ext)
// {
// 	// console.log("This is the extension: " + ext);
// 	fs.readdir(path, function(err, list)
// 	{
// 		if(err) { throw err; }

// 		var regex = /.*\.md/;
// 		list.filter(function (listItem)
// 		{
// 			if(regex.test(listItem))
// 				console.log(listItem);

// 		});
// 	});
// }

// getDirContent(filepath, ext)

/*
	// The solution for the above is this: 

	var fs = require('fs');

	// Another module
	var path = require('path'); 

	var folder = process.argv[2];
	var ext = process.argv[3];

	fs.readdir(folder, function()
	{
		if(err) return console.error(err);
		files.forEach(function(file)
		{
			if(path.extname(file) === ext) console.log(file);
		});
	});

*/

var readDir = require('./mod_readdir');

var filePath = process.argv[2];
var ext = process.argv[3];

readDir(filePath, ext, function(err, list) {
	if(err) console.error('There was an error: ', err);

	list.forEach(function(item){ console.log(item); });
});
