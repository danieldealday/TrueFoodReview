var User = require('./userModel');

function errorVerify (err, user) {
  if (err) {
    console.log(err);
    res.redirect('/signup');
  }
  next();
}

var userController = {
  createUser: function (req, res, next) {
    User.sync().then(function () {
      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }, function (err) {
        console.log(err);
      });
    });
    next();
  },
  verifyUser: function (req, res, next) {
    var query = User.findAll({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }
    })
    .then(function (data) {
    });
  }
};

module.exports = userController;
