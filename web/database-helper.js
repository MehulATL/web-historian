var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'webhistory',
  user     : 'root',
  password : '',
});


exports.query = function(queryString, callBack){
  connection.connect();

  connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    callBack(rows, fields);
    // return rows;
  });

  connection.end();
};

exports.getNewURLs = function(callBack){
  var query = 'SELECT * FROM sites WHERE html is NULL';
  exports.query(query, function(rows, fields){
    callBack(rows, fields);
  });
};

exports.addURL = function(newUrl, callBack) {
  var query = 'INSERT INTO sites (url) VALUES ("' + newUrl + '")';
  return exports.query(query, callBack);
};

exports.saveHTML = function(url, html, callBack) {
  // var query = 'INSERT INTO sites (html) VALUES ("' + html + '") WHERE url = "' + url + '"';
  var query = 'UPDATE sites SET html = "' + html + '" WHERE url = "' + url + '"';
  return exports.query(query, callBack);
};


// exports.saveHTML('www.google.com', '<p>the html</p>', function(){}); 
// exports.addURL('www.reddit.com');


// var urls = exports.getNewURLs(function(rows, fields){
  // console.log('The rows are', rows);
// });
