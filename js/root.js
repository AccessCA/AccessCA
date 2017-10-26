(function(angular) {
  'use strict';
angular.module('form', ['ngRoute'])
  .controller('formController', ['$scope', function($scope) {
        $scope.wantsCalFresh = false;
        $scope.wantsMediCal = false;
        $scope.wantsCalWORKS = false;

        $scope.isCitizen = false;
        $scope.income;
        $scope.assets;
        $scope.numberInHousehold;

        $scope.isDisabled = false
        $scope.age
        $scope.isRefugee = false
        $scope.nursingHome = false
        $scope.hasCancer = false
 

        $scope.isStudent;
        $scope.hasSSI;
        $scope.numberOnSSI;

        $scope.has60 = false;
        $scope.hasDisabled = false;

        // $scope.isNotPregnant = false;
        $scope.isPregnant;

        $scope.hasChildUnder19;

        $scope.hasUnavailableParentCalWORKS;
        // $scope.notUnavailableParentCalWORKS = false;
        $scope.hasLowIncomeParentCalWORKS = false;

        $scope.hasUnavailableParentMediCaL;
        // $scope.notUnavailableParentMediCal = false;
        $scope.lowIncomeParentMediCal = false;

        $scope.isCalFreshEligible = function () { 

            return $scope.income <= 1915 + 670 * ($scope.numberInHousehold - 1) 
            && !($scope.isStudent == "yes" && $scope.numberInHousehold == 1) 
            && !($scope.numberInHousehold == $scope.numberOnSSI) 
            && !($scope.numberInHousehold == 1 && $scope.hasSSI == "yes")
            && $scope.isCitizen; 
        };

        $scope.isMediCalEligible = function () { 

            return $scope.income < $scope.MediCalIncome()
                || $scope.age < 21
                || $scope.age > 64
                || $scope.unavailableParentMediCaL
                || $scope.lowIncomeParentMediCal
                || $scope.otherMediCalRequirements()
                
        };

        $scope.maxWorksIncome = function (x) { return 414 + 318 * x - 8 * x ^ 2}

        $scope.MediCalIncome = function (x) { return 16395 +  ($scope.numberInHousehold - 1) * 5741}
            


        $scope.otherMediCalRequirements = function () {return $scope.isRefugee || $scope.nursingHome || $scope.hasCancer || $scope.isDisabled || $scope.isPregnant}


        $scope.isCalWORKSEligible = function () {
            return $scope.meetsChildReqsCalWORKS()
            && $scope.isCitizen
            && $scope.income <= (420 + 320 * $scope.numberInHousehold - 8 * ($scope.numberInHousehold) ^ 2)
            && ($scope.assets <= 2250 || (($scope.has60 || $scope.hasDisabled) && ($scope.assets <= 3250 )));
        };

        $scope.checkSSINumber = function () { return $scope.numberInHousehold > 1 && $scope.hasSSI == "yes"; };
        $scope.meetsChildReqsMediCal = function () { return $scope.lowIncomeParentMediCal || $scope.unavailableParentMediCaL}
        $scope.meetsChildReqsCalWORKS = function () { return $scope.lowIncomeParentCalWORKS || $scope.unavailableParentCalWORKS || $scope.isPregnant}

  }]);
})(window.angular);

