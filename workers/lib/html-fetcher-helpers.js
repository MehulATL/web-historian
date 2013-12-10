var fs = require('fs');
<<<<<<< HEAD
=======
var http = require('http-request');
// var storageFile = __dirname + '/../data/sites/';
var storageFile = __dirname + '/../../data/sites/';
>>>>>>> 31e43eafa3b449daa8d55da9dca81752ac82a446

exports.readUrls = function(filePath, cb){

  fs.readFile(filePath, function(error, data){
    if (error){
      console.log('Error loading sites.txt', error);
    } else {
      data = data.toString().split('\n');

      // delete contents of sites.txt
      fs.writeFile(filePath, '');

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

