'use strict'

angular.module('markvi')

.controller('MainCtrl', function ($rootScope, $scope, $state, $stateParams, files) {
  $rootScope.selectedFile = $stateParams.id
  if ($stateParams.id) {
    if (!files.get($stateParams.id)) {
      $state.go('main')
    }
  }
})
