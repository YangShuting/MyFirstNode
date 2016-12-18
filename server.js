var http = require('http');
var url = require('url');

function startServer(route, handler){

	function onRequest( request, response ){
		var pathname = url.parse( request.url, true).pathname;		
		route( pathname, handler, response, request );
		console.log('Request '+pathname+' received.');
	}

	http.createServer(onRequest).listen(8888);
	console.log('Response start');
}

exports.startServer = startServer;

