var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'webhistory',
  user     : 'root',
  password : '',
});


exports.query = function(queryString, callBack){
  // connection.connect();

  connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    callBack(rows, fields);
    // return rows;
  });

  // connection.end();
};

exports.getURLs = function(callBack){
  var query = 'SELECT * FROM sites WHERE html is NULL';
  exports.query(query, function(rows, fields){
    callBack(rows, fields);
  });
};

exports.getURL = function(url, callBack, response){
  var query = 'SELECT * FROM sites WHERE url = "' + encodeURI(url) + '"';
  exports.query(query, function(rows, fields){
    // console.log(rows);
    callBack(response, decodeURI(rows[0].html));
  });
};

exports.checkURL = function(url, callBack, response){
  var query = 'SELECT * FROM sites WHERE url = "' + encodeURI(url) + '"';
  exports.query(query, function(rows, fields){
    // console.log(rows);
    callBack(response, rows.length > 0);
  });
};

exports.addURL = function(newUrl, callBack) {
  var query = 'INSERT INTO sites (url) VALUES ("' + encodeURI(newUrl) + '")';
  return exports.query(query, callBack);
};

exports.saveHTML = function(url, html, callBack) {
  var query = 'UPDATE sites SET html = "' + encodeURI(html) + '" WHERE url = "' + encodeURI(url) + '"';
  return exports.query(query, callBack);
};

// exports.getURL('www.google.com', function(rows){
//   console.log(rows);
// });
// exports.saveHTML('www.google.com', '<p>the html</p>', function(){});
// exports.addURL('www.reddit.com');


// var urls = exports.getNewURLs(function(rows, fields){
  // console.log('The rows are', rows);
// });
