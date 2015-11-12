'use strict'

angular.module('markvi')

	.controller('ModalCtrl', ['$scope',  function($scope){
		$scope.modalShown = false;
		$scope.toggleModal = function(){
			$scope.modalShown = !$scope.modalShown;
		};
	}]);
