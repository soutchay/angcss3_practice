angular.module('myApp', [])
.controller('MyController', function($scope){
	console.log('yolo');
	$scope.toggles = [{ state: true }, { state: false }, { state: true }];
	$scope.changeClass = function(){
		$scope.class ="viewing";
	}
});