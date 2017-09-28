var app = angular.module('root', [])
    .controller('controller', function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.isFirstElementVisible = true;
        $scope.show = function () { 
        	return $scope.firstName === "Courtney"; 
        };
    });