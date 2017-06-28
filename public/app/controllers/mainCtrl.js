angular.module('cakeApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.event = {};

    $scope.sendContact = function (con) {
        con.day = $scope.event.day
        con.month = $scope.event.month
        mainSvc.contact(con)
    }


    $scope.recTemp = function (event) {
            mainSvc.getTemp(event).then(function (response) {
                let resp = response.data.trip
                alert("POSSIBLE WEATHER CONDITIONS FOR YOUR CONSIDERATION:" + "\n\n" + resp.cloud_cover.cond + "\n" + "AVG HIGH: " + resp.temp_high.avg.F + "°" + "\n" + "AVG LOW: " + resp.temp_low.avg.F + "°")
                // console.log(resp)
            })
    }





})