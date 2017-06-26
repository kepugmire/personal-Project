angular.module('cakeApp').controller('cakesCtrl', function ($scope, mainSvc, $stateParams) {

$scope.getCakes = function(response) {
   mainSvc.getCakes().then(function(response) {
            $scope.cakes = response.data
            // console.log($scope.cakes)
    });
}

$scope.getCakes()
console.log($stateParams.id)

$scope.getCake = function(response) {
    mainSvc.getCake($stateParams.id).then(function(response){
        $scope.cake = response.data
        console.log($scope.cake)
    })
}

$scope.getCake()



})