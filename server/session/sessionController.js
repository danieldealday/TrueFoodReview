var Session = require('./sessionModel.js');
var Cookies = require('cookies');

var sessionController = {
  isLoggedIn: function (req, res, next) {
    str = req.headers.cookie;
    str.match(/ssid/) ? next() : res.redirect('/signup');
  },
  startSession: function (req, res) {
    var obj = {};
    obj.cookieId = req.body.username + req.body.password;
    obj.expires = new Date();
    Session.sync().then(function () {
      Session.create(obj, function (err) {
        console.log(err);
      });
    });
  }
};

module.exports = sessionController;
