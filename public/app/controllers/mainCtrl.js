angular.module('cakeApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.test = mainSvc.test



    $scope.sendContact = function () {
        // console.log("something", $scope.firstnname)
        mainSvc.contact(
            $scope.firstnname, $scope.lastnname, $scope.e_mail, $scope.ssubject, $scope.dday, $scope.mmonth, $scope.yyear, $scope.mmessage, $scope.rreferral
        )
    }





})