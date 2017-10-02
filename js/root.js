var app = angular.module('root', [])
    .controller('controller', function($scope) {
    	$scope.wantsCalFresh = false;
    	$scope.wantsMediCal = false;
    	$scope.wantsCalWORKS =false;
        $scope.income;
        $scope.numberInHousehold;
        $scope.isStudent;
        $scope.hasSSI;
        $scope.numberOnSSI;
        $scope.has60 = false;
        $scope.hasDisabled = false;
        $scope.isCalFreshEligible = function () { return $scope.income <= 1915 + 670 * ($scope.numberInHousehold - 1) && !($scope.isStudent == "yes" && $scope.numberInHousehold == 1) && !($scope.numberInHousehold == $scope.numberOnSSI) && !($scope.numberInHousehold == 1 && $scope.hasSSI == "yes"); };
        $scope.showEligible = function () { return $scope.wantsCalFresh && $scope.isCalFreshEligible(); };
        $scope.showNotEligible = function () { return $scope.wantsCalFresh && !$scope.isCalFreshEligible(); };
        $scope.checkSSINumber = function () { return $scope.numberInHousehold > 1 && $scope.hasSSI == "yes"; };
    });