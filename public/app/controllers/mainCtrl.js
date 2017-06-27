angular.module('cakeApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.test = mainSvc.test



    // $scope.sendContact = function () {
    //     // console.log("something", $scope.firstnname)
    //     mainSvc.contact(
    //         $scope.firstnname, $scope.lastnname, $scope.e_mail, $scope.ssubject, $scope.dday, $scope.mmonth, $scope.yyear, $scope.mmessage, $scope.rreferral
    //     )
    // }

    $scope.recTemp = function (event) {
        mainSvc.getTemp(event).then(function (response) {   let resp = response.data.trip
            alert("POSSIBLE WEATHER CONDITIONS FOR YOUR CONSIDERATION:" + "\n" + "\n" + resp.cloud_cover.cond + "\n" + "AVG HIGH: " + resp.temp_high.avg.F + "°" + "\n" + "AVG LOW: " + resp.temp_low.avg.F + "°")
            console.log(resp)
        })
    }



    //+ "LOW: " + resp.temp_low.min.F + "°"

    // "RAIN: " + resp.chance_of.chanceofrainday.percentage + "%" +

    // "SNOW: " + resp.chance_of.chanceofsnowday.percentage + "%" + "\n" +

})