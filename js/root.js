var app = angular.module('root', [])
    .controller('controller', function($scope) {
        $scope.income;
        $scope.numberInHousehold;
        $scope.isEligible = function () { return $scope.income <= 1915 + 670 * ($scope.numberInHousehold - 1); };
        $scope.isFirstElementVisible = false;
    });