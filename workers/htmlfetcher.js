// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.
var http = require('http-request');
var fs = require('fs');

// load sites.txt
// grab url from each line
// remove from file
// download and save website to unique text file.

http.get({
  url: 'http://www.google.com',
  progress: function (current, total) {
    console.log('downloaded %d bytes from %d', current, total);
  }
}, 'get.bin', function (err, res) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.code, res.headers, res.file);
});