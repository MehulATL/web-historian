var path = require('path');
var fs = require('fs');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveStaticAssets = function(response, pathname, sendResponseCallback) {
  console.log('serving static assets', pathname);

  // FIXME: Allow for nested index.html files.
  if(pathname === '/') {
    pathname = '/index.html';
  }

  fs.readFile(__dirname + '/public' + pathname, function(error, data){
    if (error){
      console.log(error);
      sendResponseCallback(response, 'error', 404);
    } else {
      // console.log('Done reading file', data += data);
      sendResponseCallback(response, data.toString());
    }
  });
};

// As you go through, keep thinking about what helper functions you can put here!