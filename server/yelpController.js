var mydb = require('./postgres.js');
var config = require('../config.json');
var yelp = require("yelp").createClient(config.yelp);

var yelpController = {
  getData: function(req, res, next) {
    var yelpData = [];
    yelp.search({term: "Restaurant",limit: 20,offset: 20, sort:2, location: "Playa Vista, CA",
    radius_filter: 20000}, function(error, data) {
      if(error) console.log(error);
      data.businesses.forEach(function(item){
        var obj = {};
        obj.name = item.name;
        obj.rating = item.rating;
        obj.review_count = item.review_count;
        obj.lat = item.location.coordinate.latitude;
        obj.long = item.location.coordinate.longitude;
        obj.address = item.location.address;
        obj.city = item.location.city;
        obj.state = item.location.state_code;
        obj.postal_code = item.location.postal_code;
        yelpData.push(obj);
      });
      mydb.yelp(yelpData);
      setTimeout(function(){next();}, 4000);
    });
  }
};

module.exports = yelpController;
