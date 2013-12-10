var fs = require('fs');
var http = require('http-request');
// var storageFile = __dirname + '/../data/sites/';
var storageFile = __dirname + '/../../data/sites/';

exports.readUrls = function(filePath, cb){

  fs.readFile(filePath, function(error, data){
    if (error){
      console.log('Error loading sites.txt', error);
    } else {
      data = data.toString().split('\n');
      cb(data);
    }
  });

};
//storageFile + urls[i]
exports.downloadUrls = function(urls){
  urls = urls || [];

  // loop over URLS
  for(var i = 0; i < urls.length; i++) {
    if(urls[i] !== '') {
      http.get({
        url: urls[i]
        // progress: progress(current, total)
      },
      storageFile + urls[i], function (err, res) {
        if (err) {
          console.error(err);
          return;
        }

        // console.log(res.code, res.headers, res.file);
      });
    }
  }

};


var progress = function (current, total) {
  console.log('downloaded %d bytes from %d', current, total);
};

var finished = function (err, res) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.code, res.headers, res.file);
};

