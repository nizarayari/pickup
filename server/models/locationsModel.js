var locationsHelper = require('../helperFunctions/locationsHelper.js');

module.exports = {
  locations : {
    get : function(callback, params) {
      locationsHelper.getLocation(callback, params);
    },
    post : function(callback, params) {
      locationsHelper.postLocation(callback, params);
    },
    put : function(callback) {
    },
    delete : function(callback) {
      locationsHelper.deleteLocation(callback);
    }
  }
}