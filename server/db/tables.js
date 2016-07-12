
//create schema
module.exports = {
    games : 'CREATE TABLE IF NOT EXISTS `Games` (`id` INTEGER NOT NULL AUTO_INCREMENT, `sport` VARCHAR(50) NULL DEFAULT NULL, `rules` VARCHAR(500) NULL DEFAULT NULL, `time` VARCHAR(10) NULL DEFAULT NULL, `location` VARCHAR(500) NULL DEFAULT NULL, `originalPlayers` INTEGER NULL DEFAULT 1, `joinedPlayers` VARCHAR(1000) NULL DEFAULT NULL, `playersNeeded` INTEGER NULL DEFAULT NULL, `created_by` VARCHAR(50) NULL DEFAULT NULL, `created_at` TIMESTAMP NULL DEFAULT NULL, `location_id` INTEGER NULL DEFAULT NULL, PRIMARY KEY (`id`) );',

    locations : 'CREATE TABLE IF NOT EXISTS `Locations` ( `id` INTEGER NOT NULL AUTO_INCREMENT, `address` VARCHAR(150) NULL DEFAULT NULL, `city` VARCHAR(75) NULL DEFAULT NULL, `state` VARCHAR(40) NULL DEFAULT NULL, `zip_code` VARCHAR(10) NULL DEFAULT NULL, PRIMARY KEY (`id`));',

    players : 'CREATE TABLE IF NOT EXISTS `Players` ( `id` INTEGER NOT NULL AUTO_INCREMENT, `game_id` INTEGER NULL DEFAULT NULL, `name` VARCHAR(30) NULL DEFAULT NULL, PRIMARY KEY (`id`) );',

  create : function() {
    connection.query(this.games, function (err) {
      if (err) { console.log('error creating games table : ', err); } 
      else { console.log("games table created") }
    });

    connection.query(this.locations, function (err) {
      if (err) { console.log('error creating locations table : ', err); }
      else { console.log("locations table created") }
    });

    connection.query(this.players, function (err) {
      if (err) { console.log('error creating players table : ', err); }
      else { console.log('players table created') }
    });

  }

}

