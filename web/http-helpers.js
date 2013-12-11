var path = require('path');
var fs = require('fs');
var dbHelper = require('./database-helper');

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

exports.serveStaticAssets = function(request, response, pathname, sendResponseCallback) {
  console.log('serving static assets', pathname);

  var filename = '';
  if(pathname === "/"){
    pathname = '/index.html';
  }
  filename = __dirname + '/public' + pathname;


  fs.exists(filename, function(exists){
    if(exists) {
      // filename = __dirname + '/../data/sites' + pathname;
      readFileHelper(filename, sendResponseCallback, response);
    } else {
      // get the html data
      console.log('Looking for file', pathname);
      var url = pathname.substring(1);
      dbHelper.getURL(url, sendResponseCallback, response);
    }

  });

};

// As you go through, keep thinking about what helper functions you can put here!