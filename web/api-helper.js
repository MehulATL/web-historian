var path = require('path');
var fs = require('fs');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

var checkFileExists = function(data, response, sendResponseCallback){
  // var filename = __dirname + '/../data/sites' + pathname;
  // console.log('post data is', data);
  data = JSON.parse(data);
  var filename = __dirname + '/../data/sites/' + data.url;
  console.log('Looking for file', filename);
  fs.exists(filename, function(exists){
    if(!exists) {
      // Invoke storing func
      updateURLList(data.url);
      sendResponseCallback(response, 'URL saved!', 302);
    }

    // redirect user to it, using get request.
    sendResponseCallback(response, '{ found: true }', 302);
  });
};

var postHandler = function(request, callBack, response, sendResponseCallback){
  console.log('postHandler running');
  var data = '';
  request.on('data', function(chunk){
    data += chunk;
    callBack(data, response, sendResponseCallback);
  });

};

var updateURLList = function (url) {
  fs.appendFile(__dirname + '/../data/sites.txt', url + '\n');
};

exports.storeAssets = function(request, response, pathname, sendResponseCallback) {
  postHandler(request, checkFileExists, response, sendResponseCallback);
};




// As you go through, keep thinking about what helper functions you can put here!