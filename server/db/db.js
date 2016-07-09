
//_____________________________MODULES_________________________________________
var mysql = require('mysql');
var fs = require('fs');
var tables = require('./tables.js');
var db_config = require('./dbConfig.js');



//init connection from Poll_db
var createConnection = function() {
  connection = mysql.createConnection(db_config);

  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err);
    }
  });

  connection.on('error', function(err) {
    console.error(err);
    createConnection();
  });
}

createConnection();

tables.create();

module.exports = {

  //Error handle 
  // createConnection.on('error', function() { console.error("ERROR in database") });

  // //Init DB setup when server boots
  // fs.readFile(__dirname + '/pickups.sql', 'utf-8', function(err, data) {
  //   //Multiple statement work-around
  //   var commands = data.split(";");
  //   commands.pop(); 
  //   commands.forEach (function(command) {
  //     createConnection.query(command, function(err, results) {
  //       if (err) {
  //         console.error(err);
  //       } 
  //     });
  //   });
  // });
  addGame : function(sport, rules, time, player_max, created_by, callback) {
    var check = 'SELECT * FROM Games WHERE sport = ? AND time = ?';
    var checkValues = [sport, time];
    var insert = "INSERT into Games (sport, rules, time, player_max, created_by) values (?, ?, ?, ?, ?);";
    var insertValues = [sport, rules, time, player_max, created_by];


    connection.query(check, checkValues, function(err, data) {
      if (err) {
        console.error("error 1 db addGame : ", err);
      }
      if (data.length === 0) {
        connection.query(insert, insertValues, function(err) {
          if (err) {console.error('error 2 in db addGame :', err)}
          else { callback(true); }

        })
      } else {
        callback(false);
      }
    });
  },



  // 5-second keep-alive request
  setInterval(function () {db.query('SELECT 1') }, 5000);

};
