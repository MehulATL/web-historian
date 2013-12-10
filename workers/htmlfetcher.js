// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.
var http = require('http-request');
var fs = require('fs');
var fetcher = require('./lib/html-fetcher-helpers');
var filename = __dirname + '/../data/sites.txt';

console.log('path', __dirname);

<<<<<<< HEAD
http.get({
  url: 'http://www.google.com',
  progress: function (current, total) {
    console.log('downloaded %d bytes from %d', current, total);
  }
// }, 'get.bin', function (err, res) {
}, '__dirname + '/../data/sites/' + variableThatRepresentsUniqueURL', function (err, res) {

  if (err) {
    console.error(err);
    return;
  }
=======
fetcher.readUrls(filename, fetcher.downloadUrls);
>>>>>>> 31e43eafa3b449daa8d55da9dca81752ac82a446

// CRONJOB
// * * * * * /opt/boxen/nodenv/versions/v0.10.0/bin/node /Users/hackreactor/code/lovenick/2013-11-web-historian/workers/htmlfetcher.js >/tmp/stdout.log 2>~/Desktop/stderr.log
