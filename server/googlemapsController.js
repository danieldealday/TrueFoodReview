var request = require('request');

var googlemapsController = {
  getData: function (req, res, next) {
    request('https://www.googleapis.com/fusiontables/v1/tables/1997wo1poMe6iv7VXz1P5Dj1fkO-vud48QgNZwu1J?key=', function (error, res, data) {
      if (error) console.log(error);
      console.log(data);
    });
  }
};

module.exports = googlemapsController;
