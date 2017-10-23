(function(angular) {
  'use strict';
angular.module('form', [])
  .controller('formController', ['$scope', function($scope) {
    $scope.wantsCalFresh = false;
    $scope.wantsMediCal = false;
    $scope.wantsCalWORKS = false;

    $scope.showForm = function () { 
      return !form.$submitted;
    };
  }]);
})(window.angular);