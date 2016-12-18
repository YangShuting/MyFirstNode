var server = require('./server');
var router = require('./router');
var requestHandler = require('./RequestHandler');
var handler = {};
handler["/"] = requestHandler;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;
handler["/show"] = requestHandler.show;
server.startServer(router.route, handler);