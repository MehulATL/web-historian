var fs = require('fs');
var http = require('http-request');
var dbHelper = require('../../web/database-helper');
// var storageFile = __dirname + '/../data/sites/';
var storageFile = __dirname + '/../../data/sites/';

exports.readUrls = function(filePath, cb){

  dbHelper.getURLs(function(rows){
    cb(rows);
  });

  // fs.readFile(filePath, function(error, data){
  //   if (error){
  //     console.log('Error loading sites.txt', error);
  //   } else {
  //     data = data.toString().split('\n');

  //     // delete contents of sites.txt
  //     fs.writeFile(filePath, '');

  //     cb(data);
  //   }
  // });

};
//storageFile + urls[i]
exports.downloadUrls = function(urls, counter){
  urls = urls || [];
  counter = counter || 0;
  var depth = urls.length;

  if(counter === depth){
    return;
  }

  console.log(urls[counter].url);
  if(urls[counter].url !== '') {
    getHTML(urls, urls[counter].url, counter);
  }

};


var getHTML = function(urls, url, counter){
  http.get({
    url: url
  },
    function(err, res){
      // console.log('The html for', err, res.buffer.toString());
      console.log('URL:', url);
      // console.log('Getting data for', res.buffer);
      dbHelper.saveHTML(url, res.buffer.toString(), function(){
        exports.downloadUrls(urls, counter + 1);
      });

      // exports.
    }
  );
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

