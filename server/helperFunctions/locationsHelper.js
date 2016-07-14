// MODULES

var db = require('../db/db.js');
var router = require('express').Router();


exports.getLocation = function(callback, params) {
  var check = 'SELECT * FROM Locations';

  db.query(check, function(err, data) {
    if (err) {
      console.error("error getting locations from the db :", err);
    }
    if (data) {
      callback(data)
    }
  })
}

exports.postLocation = function(callback, params) {
  var insert = "INSERT INTO Locations (name, address, lat, lng, type) values (?, ?, ?, ?, ?)";
  var insertValues = [params.name, params.address, params.lat, params.lng, params.type];

  db.query(insert, insertValues, function(err, data) {
    if (err) { console.error('error inserting into db, locationsHelper postLocation :', err) }
      else { callback(data); }
  });
}

