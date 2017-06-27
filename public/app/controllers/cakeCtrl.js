angular.module('cakeApp').controller('cakeCtrl', function ($scope, mainSvc, $stateParams) {


console.log('cakeCtrl')

$scope.getCake = function(response) {
    mainSvc.getCake($stateParams.id).then(function(response){
        $scope.oneCake = response.data[0]
        console.log($scope.oneCake)
    })
}

$scope.getCake()


})