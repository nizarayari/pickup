var mysql = require('mysql');

var connection = {
  // connectionLimit : 1000,
  // connectTimeout : 60 * 60 * 1000,
  // aqcuireTimeout : 60 * 60 * 1000,
  // timeout : 60 * 60 * 1000
  host : process.env.DB_HOST,
  user : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DB,
  charset : 'utf8'
}

// var pool = mysql.createPool({
//   connectionLimit : 10,
//   user : 'root',
//   password : '',
//   port : 3000,
//   database : "pickups"
// });

module.exports = connection;