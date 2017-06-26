angular.module('cakeApp').controller('loginCtrl', function ($scope, mainSvc) {



    $scope.login = (user) => {
        mainSvc.login(user)
    }


})