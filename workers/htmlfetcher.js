// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.
var http = require('http-request');
var fs = require('fs');
var fetcher = require('./lib/html-fetcher-helpers');
var filename = __dirname + '/../data/sites.txt';



fetcher.readUrls(filename, fetcher.downloadUrls);


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
