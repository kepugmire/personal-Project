angular.module('cakeApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.event = {};

    $scope.favorites;

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



    $scope.getUser = function () {
        mainSvc.getUser().then(function (user) {
            $scope.favorites = user
            console.log(user)
        })
    }
    $scope.getUser();



    $scope.addToFavorites = function (fav) {
        var favFound = false
        for (var i = 0; i < $scope.favorites.favorites.length; i++) {
            if ($scope.favorites.favorites[i].id == fav.id) {
                favFound = true
                break
            }
        }
        if (!favFound) {
            var favoriteObj = {
                "userid": $scope.favorites.password,
                "image_path": fav.image_path,
                "id": fav.id
            }
            console.log(favoriteObj)
            mainSvc.postFavorites(favoriteObj).then(function (response) {
                $scope.getUser()
            })
        }
    }

    $scope.deleteFav = (notFav) => {
        mainSvc.deleteFav(notFav).then((response) => {
            $scope.getUser()
        })
    }



})