var Sequelize = require('sequelize');
var config = require('../config.json');



var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});
//
var Ratings = sequelize.define('Ratings',{
  name: Sequelize.STRING,
  rating: Sequelize.FLOAT,
  review_count: Sequelize.INTEGER,
  lat: Sequelize.FLOAT,
  long: Sequelize.FLOAT,
  Address: Sequelize.STRING,
  City: Sequelize.STRING,
  State: Sequelize.STRING,
  Postal_code: Sequelize.INTEGER
});

sequelize.authenticate().then(function(err, data) {
  console.log('Connected to PostgreSQL Database');
}).catch(function(err) {
  console.log(err);
});

module.exports = function(data){

Ratings.sync({force: true})
  .then(function(){
    data.forEach(function(item){
      var result = {
          name: item.name,
          rating: item.rating,
          review_count: item.review_count,
          lat: item.lat,
          long: item.long,
          Address: item.address[0],
          City: item.city,
          State: item.state,
          Postal_code: item.postal_code
        };
      Ratings.create(result);
    });
  });
};
