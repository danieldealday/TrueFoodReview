var app = angular
  .module('TrueFoodReview.LoginController', ['ui.router'])
  .controller('LoginController', ['$scope', '$http', LoginController]);

function LoginController($scope, $http) {
	var vm = this;
	vm.isUserLoggedIn = false;
	vm.login = function () {
		this.isUserLoggedIn = true;
		var data = $.param({
			firstName: vm.firstName,
			lastName: vm.lastName,
			email: vm.email,
			password: vm.password
		});
		var config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			}
		};
		$http.post('/signup', data, config)
			.success(function (data, status, headers, config) {
				vm.PostDataResponse = data;
			})
			.error(function (data, status, header, config) {
				vm.ResponseDetails = "Data: " + data +
					"<hr />status: " + status +
					"<hr />headers: " + header +
					"<hr />config: " + config;
		});
	};
}
