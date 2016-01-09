var Cookies = require('cookies');

var cookiesController = {
  setCookie: function (req, res, next) {
    var userpass = req.body.username + req.body.password;
    var cookie = new Cookies (req, res);
    cookies.set('secure', userpass);
    next();
  }
};

module.exports = cookiesController;
