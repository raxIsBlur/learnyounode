var http = require('http');

var urlToGo = process.argv[2];

function getUrlContent(url)
{
	http.get(url, function(response) {
		// var response = "";
		response.on('error', function(error) {
			console.log(error);
		})
		response.on('data', function(data) {
			// response += data;
			console.log(data.toString());
		});
		// response.on('end', function() {
			
		// });
	});
}

getUrlContent(urlToGo);