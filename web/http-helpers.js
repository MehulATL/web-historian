var path = require('path');
var fs = require('fs');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};


var readFileHelper = function(filename, callBack, response) {
  fs.readFile(filename, function(error, data){
    if (error){
      console.log(error);
      callBack(response, 'error', 404);
    } else {
      // console.log('Done reading file', data += data);
      callBack(response, data.toString());
    }
  });
};

exports.serveStaticAssets = function(response, pathname, sendResponseCallback) {
  console.log('serving static assets', pathname);

  // FIXME: Allow for nested index.html files.
  var filename = '';
  if(pathname === "/"){
    filename = '/index.html';
  } else {
    filename = pathname;
  }
  filename = __dirname + '/public' + filename;

  console.log('Looking for file', filename);

  fs.exists(filename, function(exists){
    if(!exists) {
      filename = __dirname + '/../data/sites' + pathname;
    }
    readFileHelper(filename, sendResponseCallback, response);
  });

};

// As you go through, keep thinking about what helper functions you can put here!