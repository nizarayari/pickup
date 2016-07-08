
//_____________________________MODULES_________________________________________
var mysql = require('mysql');
var fs = require('fs');


//init connection from Poll_db
var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'polls_db',
  multipleStatements : true
});

//Error handle 
db.on('error', function() { console.error("ERROR in database") });

//Init DB setup when server boots
fs.readFile(__dirname + './poll.sql', 'utf-8', function(err, data) {
  //Multiple statement work-around
  var commands = data.split(";"); 
  commands.forEach (function(command) {
    db.query(command, function(err, results) {
      if (err) {
        console.error(err);
      } 
      else { 

      }
    });
  });
});


// 5-second keep-alive request
setInterval(function () {db.query('SELECT 1') }, 5000);

//expose for server use
module.exports = db;