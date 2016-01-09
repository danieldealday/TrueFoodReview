var Sequelize = require('sequelize');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

var User = sequelize.define('user',
  {
    firstName: {
      type: Sequelize.STRING,
      unique: true,
      field: 'first name'
    },
    lastName: {
      type: Sequelize.STRING,
      unique: true,
      field: 'last name'
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      field: 'email'
    },
    password: {
      type: Sequelize.STRING,
      field: 'password'
    }
  },
  {
    freezeTableName: true
  }
);

User.sync();

module.exports = User;
