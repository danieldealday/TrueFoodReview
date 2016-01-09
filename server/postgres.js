var Sequelize = require('sequelize');
var express = require('express');
var config = require('../config.json');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

var PlaceYelp = sequelize.define('placeYelp', {
  name: {type: Sequelize.STRING, unique: true},
  rating: {type: Sequelize.FLOAT},
  review_count: {type: Sequelize.INTEGER},
  lat: {type: Sequelize.FLOAT},
  long: {type: Sequelize.FLOAT},
  address: {type: Sequelize.STRING},
  city: {type: Sequelize.STRING},
  state: {type: Sequelize.STRING},
  postal_code: {type: Sequelize.INTEGER}
});

var Foursquare = sequelize.define('foursquare', {
  name: {type: Sequelize.STRING, unique: true},
  rating: {type: Sequelize.FLOAT},
  review_count: {type: Sequelize.INTEGER},
  lat: {type: Sequelize.FLOAT},
  long: {type: Sequelize.FLOAT},
  address: {type: Sequelize.STRING},
  city: {type: Sequelize.STRING},
  state: {type: Sequelize.STRING},
  postal_code: {type: Sequelize.INTEGER}
});

sequelize.authenticate().then(function(err, data) {
  console.log('Connected with PostgreSQL Database');
}).catch(function(err) {
  console.log(err.message);
});

module.exports = {
  yelp: function(data)  {
    PlaceYelp.sync().then(function() {
      data.forEach(function(item) {
        var result = {
          name: item.name,
          rating: item.rating,
          review_count: item.review_count,
          lat: item.lat,
          long: item.long,
          address: item.address[0],
          city: item.city,
          state: item.state,
          postal_code: item.postal_code
        };
        PlaceYelp.create(result).then(function() {
          console.log("synced");
        });
      });
    });
  },
  foursquare: function(data)  {
    Foursquare.sync().then(function() {
      data.forEach(function(item) {
        var result = {
          name: item.name,
          rating: item.rating,
          review_count: item.review_count,
          lat: item.lat,
          long: item.long,
          address: item.address,
          city: item.city,
          state: item.state,
          postal_code: item.postal_code
        };
        Foursquare.create(result).then(function() {
          console.log("synced");
        });
      });
    });
  },
};
