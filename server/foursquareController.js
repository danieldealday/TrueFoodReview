var request = require('request');
var config = require('../config.json');
var mydb = require('./postgres.js');
var Promise = require('bluebird');

var fourSquareController = {
	getData: function(req, res, next) {
		var queryURL = 'https://api.foursquare.com/v2/venues/explore?ll=33.97914,-118.41480705731&radius=8000&query=food&client_id='
			+ config.foursquare.client_id + '&client_secret='
			+ config.foursquare.client_secret + '&v=20151105';

		var foursquareData = [];

		request(queryURL, function(error, response, data) {
			if (error) console.log(error);
			var promises = new Promise(function(resolve, reject) {
				var stats = JSON.parse(data).response.groups[0].items;
				for(var i = 0; i < stats.length; i++) {
					var obj = {};
					obj.name = stats[i].venue.name;
			        obj.rating = stats[i].venue.rating / 2;
			        obj.review_count = stats[i].venue.ratingSignals;
			        obj.lat = stats[i].venue.location.lat;
			        obj.long = stats[i].venue.location.lng;
			        obj.address = stats[i].venue.location.address;
			        obj.city = stats[i].venue.location.city;
			        obj.state = stats[i].venue.location.state;
			        obj.postal_code = stats[i].venue.location.postalCode;
					foursquareData.push(obj);
				}
				resolve(foursquareData);
			});
			promises.then(function(result) {
				mydb.foursquare(result);
				setTimeout(function(){
					next();
				}, 4000);
			});
		});
	}
};

module.exports = fourSquareController;
