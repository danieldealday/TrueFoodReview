var app = angular
  .module('TrueFoodReview.HomeController',['ui.router'])
  .controller('HomeController', ['$scope', HomeController]);
function HomeController($scope) {
  $scope.loadMap = function(){
  };
}
