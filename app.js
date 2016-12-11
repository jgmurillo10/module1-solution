(function() {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject= ['$scope'];
	function LunchCheckController($scope) {
		$scope.message="";
		$scope.items="";
		$scope.totalItems=0;

		$scope.countItems= function(message) {
			//, , is not an item
			console.log("message "+message)
			if(message==="")
				return -1;
			var count=0;
			var array= message.split(',');
			for (var i = 0; i < array.length; i++) {
				if(array[i].trim()!=="")
					count++;
			}
			return count;
		};
		$scope.showMessage= function() {
			$scope.totalItems= $scope.countItems($scope.items)
			console.log($scope.totalItems)
			if($scope.totalItems<1)
				$scope.message="Please enter data first";
			else if($scope.totalItems<4 && 
					$scope.totalItems>0)
				$scope.message="Enjoy!";
			else
				$scope.message="Too much!"
		};
	};

})();
