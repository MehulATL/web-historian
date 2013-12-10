// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.
var http = require('http-request');
var fs = require('fs');
var filename = __dirname + '/../data/sites.txt';




// grab url from each line
var getUrls = function(data){
  var urls = data.split('\n');
  urls.pop();

  for(var i = 0; i < urls.length; i++) {
    // load url
    // save html to file.
  }

  // erase file.

}

var loadFileHelper = function(filename, callBack) {
  fs.readFile(filename, function(error, data){
    if (error){
      console.log('Error loading sites.txt', error);
      // callBack(response, 'error', 404);
    } else {
      // console.log(data.toString());
      getUrls(data.toString());
    }
  });
};




// http.get({
//   url: 'http://www.google.com',
//   progress: function (current, total) {
//     console.log('downloaded %d bytes from %d', current, total);
//   }
// }, 'get.bin', function (err, res) {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(res.code, res.headers, res.file);
// });


// load sites.txt
loadFileHelper(filename);

// remove from file
// download and save website to unique text file.