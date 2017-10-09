var app = angular.module('root', [])
    .controller('controller', function($scope) {
    	$scope.wantsCalFresh = false;
    	$scope.wantsMediCal = false;
    	$scope.wantsCalWORKS = false;

        $scope.isCitizen = false;
        $scope.income;
        $scope.assets;
        $scope.numberInHousehold;

        $scope.isStudent;
        $scope.hasSSI;
        $scope.numberOnSSI;

        $scope.has60 = false;
        $scope.hasDisabled = false;

        $scope.isNotPregnant = false;
        $scope.isPregnant = false;

        $scope.hasChildUnder19 = false;


        $scope.unavailableParent = false;
        $scope.notUnavailableParent = false;
        $scope.lowIncomeParent = false;







        $scope.isCalFreshEligible = function () { 

            return $scope.income <= 1915 + 670 * ($scope.numberInHousehold - 1) 
            && !($scope.isStudent == "yes" && $scope.numberInHousehold == 1) 
            && !($scope.numberInHousehold == $scope.numberOnSSI) 
            && !($scope.numberInHousehold == 1 && $scope.hasSSI == "yes")
            && $scope.isCitizen; 
        };

        $scope.maxWorksIncome = function (x) { return 416 + 319 * x - 8 * x ^ 2}


        $scope.isCalWORKSEligible = function () {
            return $scope.meetsChildReqs()
            // && $scope.isCitizen
            // && $scope.income <= (420 + 320 * $scope.numberInHousehold - 8 * ($scope.numberInHousehold) ^ 2)
            && ($scope.assets <= 2250 || (($scope.has60 || $scope.hasDisabled) && ($scope.assets <= 3250 )));
        };

        $scope.showEligible = function () { return $scope.wantsCalFresh && $scope.isCalFreshEligible(); };
        $scope.showNotEligible = function () { return $scope.wantsCalFresh && !$scope.isCalFreshEligible(); };


        $scope.checkSSINumber = function () { return $scope.numberInHousehold > 1 && $scope.hasSSI == "yes"; };
        $scope.meetsChildReqs = function () { return $scope.lowIncomeParent || $scope.unavailableParent || $scope.isPregnant}
    });