function route(pathname, handler, response, request){
  console.log('route starts:' + pathname);
  if( typeof handler[pathname] === "function" ){
  	return handler[pathname](response, request);
  }
  else{
  	return '404 not found';
  } 
}

exports.route = route;