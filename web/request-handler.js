var path = require('path');
var url = require('url');
var httpHelper = require('./http-helpers');
module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.

var actionList = {
  'GET': httpHelper.serveStaticAssets
  // 'POST': sendResponse
};

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode);
  response.end(data);
};

module.exports.handleRequest = function (request, response) {
  // console.log(exports.datadir);
  if(request.method in actionList) {
    var pathname = url.parse(request.url).pathname;
    // var data = httpHelper.serveStaticAssets(response, pathname, sendResponse);
    var data = actionList[request.method](response, pathname, sendResponse);
  } else {
    sendResponse(response, 'Error, method not allowed', 500);
  }

  // sendResponse(response, '');
};




