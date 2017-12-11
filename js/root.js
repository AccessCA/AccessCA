(function(angular) {
  'use strict';
angular.module('form', ['ngRoute'])
  .controller('formController', ['$scope', function($scope) {
        $scope.wantsCalFresh = false;
        $scope.wantsMediCal = false;
        $scope.wantsCalWORKS = false;
        $scope.wantsCalHeadStart = false;
        $scope.wantsSSI = false;
        $scope.wantsEITC = false;

        $scope.isCitizen;
        $scope.income;
        $scope.assets;
        $scope.numberInHousehold;
        $scope.numDependents;
        $scope.yearlyInvestments;


        $scope.isDisabled = false
        $scope.inInstitution = false
        $scope.age
        $scope.isRefugee = false
        $scope.isChild = false
        $scope.numParents;
        $scope.isMarried;
        $scope.nursingHome = false
        $scope.hasCancer = false
 

        $scope.isStudent;
        $scope.hasSSI;
        $scope.hasCalWORKS;
        $scope.numberOnSSI;

        $scope.has60 = false;
        $scope.hasDisabled = false;
        $scope.dum = false;

        $scope.isPregnant;
        $scope.hasChildUnder19;
        $scope.hasChildUnder21;
        $scope.hasChildUnder5;


        $scope.hasUnavailableParentCalWORKS;
        $scope.hasLowIncomeParentCalWORKS;

        $scope.hasUnavailableParentMediCal;
        $scope.hasLowIncomeParentMediCal;

        $scope.isCalFreshEligible = function () { 

            return $scope.income <= 1915 + 670 * ($scope.numberInHousehold - 1) 
            && !($scope.isStudent && $scope.numberInHousehold == 1) 
            && !($scope.numberInHousehold == $scope.numberOnSSI) 
            && !($scope.numberInHousehold == 1 && $scope.hasSSI)
            && $scope.isCitizen; 
        };

        $scope.isMediCalEligible = function () { 

            return $scope.income < $scope.MediCalIncome()
                || $scope.age < 21
                || $scope.age > 64
                || $scope.hasUnavailableParentMediCal
                || $scope.hasLowIncomeParentMediCal
                || $scope.otherMediCalRequirements()
                
        };

        $scope.isSSIEligible = function () { 
            return $scope.isDisabled
                && $scope.SSIIncome()
                && $scope.SSIAssets()
                && $scope.isCitizen
                && !$scope.inInstitution
                
        };

        $scope.isEITCEligible = function () { 
            return $scope.yearlyInvestment <= 3450 && $scope.EITCIncome();

        };

        $scope.isHeadStartEligible = function () { 
            return $scope.HeadStartIncome($scope.income)
                || $scope.hasSSI
                || $scope.hasCalWORKS
                
        };

        $scope.isCalWORKSEligible = function () {
            return $scope.meetsChildReqsCalWORKS()
            && $scope.isCitizen
            && $scope.income <= (420 + 320 * $scope.numberInHousehold - 8 * ($scope.numberInHousehold) ^ 2)
            && ($scope.assets <= 2250 || (($scope.has60 || $scope.hasDisabled) && ($scope.assets <= 3250 )));
        };


//  Utils

        $scope.checkSSINumber = function () {
            return $scope.numberInHousehold > 1 && $scope.hasSSI;
        }

            
        $scope.MediCalIncome = function () {
            return 16395 + ($scope.numberInHousehold - 1) * 5741;
        }

        $scope.HeadStartIncome = function (x) {
            return (12060 + ($scope.numberInHousehold - 1) * 4180) >= x;
        }


        $scope.SSIIncome = function () {
            return $scope.income <= 735 
                || ($scope.isMarried && $scope.income <= 1103 ) 
                || ($scope.isChild && $scope.income <= 1103)
        }


        $scope.EITCIncome = function () {
            if ($scope.isMarried) {
                return $scope.income * 12 <= 20600 
                || ($scope.numDependents == 1 && $scope.income * 12 <= 45207)
                || ($scope.numDependents == 2 && $scope.income * 12 <= 50597)
                || ($scope.numDependents == 3 && $scope.income * 12 <= 53930);
            }
            return $scope.income * 12 <= 15010 
                || ($scope.numDependents == 1 && $scope.income * 12 <= 39617)
                || ($scope.numDependents == 2 && $scope.income * 12 <= 45007)
                || ($scope.numDependents == 3 && $scope.income * 12 <= 48340);
        }

        $scope.SSIAssets = function () {
            return $scope.assets <= 2000 
                || ($scope.isMarried && $scope.assets <= 3000) 
                || ($scope.numParents == 1 && $scope.assets <= 4000)
                || ($scope.numParents == 2 && $scope.assets <= 5000)
        }

        $scope.otherMediCalRequirements = function () {
            return $scope.isRefugee || $scope.nursingHome || $scope.hasCancer || $scope.isDisabled || $scope.isPregnant;
        }



        $scope.meetsChildReqsMediCal = function () {
            return $scope.hasLowIncomeParentMediCal || $scope.hasLowIncomeParentCalWORKS || $scope.hasUnavailableParentMediCal ||  $scope.hasUnavailableParentCalWORKS
        }
        $scope.meetsChildReqsCalWORKS = function () {
            return $scope.hasLowIncomeParentCalWORKS || $scope.hasUnavailableParentCalWORKS || $scope.isPregnant;
        }

  }]);
})(window.angular);