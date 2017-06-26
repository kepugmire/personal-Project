angular.module('cakeApp').controller('cakesCtrl', function ($scope, mainSvc, $stateParams, $state) {

$scope.getCakes = function(response) {
   mainSvc.getCakes().then(function(response) {
            $scope.cakes = response.data
            // console.log($scope.cakes)
    });
}

$scope.getCakes()
// console.log($stateParams.id)

$scope.cake = function(id){
    $state.go("cake", {id: id})
}


})