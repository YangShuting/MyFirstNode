var querystring = require('querystring');
var formidable = require('formidable');
var fs = require('fs');

function start(response){
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<h1>Custom Info:</h1>' +
	'<form action="/upload" method="post" enctype="multipart/form-data">'+
	'<label>Enter your name:<input type="text" name="name" style="display:block;margin-bottom:10px">' +
	'<label>Enter your phone:<input type="text" name="phone" style="display:block;margin-bottom:10px">' +
	'<lable style="display:block;margin-bottom:10px">Choose your Image:<input type="file" name="uploadFile" value="upload your image">'+
	'<input type="submit" value="Submit" />'+
	'</form>'+
	'</body>'+
	'</html>';
	response.writeHead( 200, {"Content-Type": "text/html"});
	response.end(body);
	
}
function upload(response, request){
	var form = new formidable.IncomingForm();
	console.log('About to parse.');
	 form.parse(request, function (error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.uploadFile.path, "C:/test/testing.png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('<p style="color:red"><em>Submit success! there\'s your info:</em><p/>');
    response.write('<div>Your name is :' + fields.name + '</div>');
    response.write('<div>Your phone is :' + fields.phone + '</div>');
    response.write('<img src="/show" />');
    response.end(); 
  });
	
 
}

function show(response){
  fs.readFile("C:/test/testing.png", 'binary',function (err, file){
    if(err){
    	response.writeHead( 200, {"Content-Type": "text/plain"});
    	response.write('404 not found.');
    }
    else{
    	response.writeHead( 200, {"Content-Type": "image/png"});
    	response.write(file, "binary");
    	response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;