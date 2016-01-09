var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

var fusionTableController = {
  getData: function(req, res, next) {
    request('https://www.googleapis.com/fusiontables/v1/tables/1997wo1poMe6iv7VXz1P5Dj1fkO-vud48QgNZwu1J?key=AIzaSyCbwSyQdbIk3TSzQPXWqJvO0OzhJJXXI2Y', function(error, res, data) {
      if(error) console.log(error);
      var fusionTable = JSON.parse(data);
    });
  }
};

module.exports = fusionTableController;
