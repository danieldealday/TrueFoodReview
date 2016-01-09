var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

var openTableController = {
  getData: function(req, res, next) {
    request('https://opentable.herokuapp.com/api/restaurants?postal_code=90212', function(error, res, data) {
      if(error) console.log(error);
      var openTableData = JSON.parse(data);
      var full = [];
    });
  }
};

module.exports = openTableController;
