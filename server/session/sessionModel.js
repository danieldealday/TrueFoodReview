var Sequelize = require('sequelize');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

var Session = sequelize.define('session',
  {
    username: {
      type: Sequelize.STRING,
      unique: true,
      field: 'username'
    },
    cookieID: {
      type: Sequelize.STRING,
      field: 'cookieID'
    }
  },
  {
    freezeTableName: true
  }
);


module.exports = Session;
