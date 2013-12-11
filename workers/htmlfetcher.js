// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.
var http = require('http-request');
var fs = require('fs');
var fetcher = require('./lib/html-fetcher-helpers');
var filename = __dirname + '/../data/sites.txt';

console.log('path', __dirname);

fetcher.readUrls(filename, fetcher.downloadUrls);

// CRONJOB
// * * * * * /opt/boxen/nodenv/versions/v0.10.0/bin/node /Users/hackreactor/code/lovenick/2013-11-web-historian/workers/htmlfetcher.js >/tmp/stdout.log 2>~/Desktop/stderr.log