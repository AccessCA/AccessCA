var app = angular.module('root', [])
    .controller('controller', function($scope) {
    	$scope.wantsCalFresh = false;
    	$scope.wantsMediCal;
    	$scope.wantsCalWORKS;
        $scope.income;
        $scope.numberInHousehold;
        $scope.isStudent;
        $scope.hasSSI;
        $scope.numberOnSSI;
        $scope.isEligible = function () { return $scope.income <= 1915 + 670 * ($scope.numberInHousehold - 1) && !($scope.isStudent == "yes" && $scope.numberInHousehold == 1) && !($scope.numberInHousehold == $scope.numberOnSSI) && !($scope.numberInHousehold == 1 && $scope.hasSSI == "yes"); };
        $scope.checkSSINumber = function () { return $scope.numberInHousehold > 1 && $scope.hasSSI == "yes"; };
		$scope.isFirstElementVisible = false;
    });