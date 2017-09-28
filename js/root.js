var app = angular.module('root', [])
    .controller('controller', function($scope) {
        $scope.firstName;
        $scope.lastName;
        $scope.income;
        $scope.isItalic = function () { return $scope.income % 2 === 0; };
        $scope.isFirstElementVisible = false;
    });