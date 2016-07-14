// Modules
var models = require('../models/gamesModel.js');
var url = require('url');

module.exports = {
  locations : {
    get : function(req, res) {
      models.locations.get(function(data, msg) {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send(msg);
        }
      })
    },
    post : function(req, res) {
      models.locations.post(function(data, msg) {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send(msg); 
        }
      }, req.body)
    },
    put : function(req, res) {
      models.locations.put(function(data) {

      })
    },
    delete : function(req, res) {
      models.locations.delete(function(data, msg) {
      })
    }
  }
}
