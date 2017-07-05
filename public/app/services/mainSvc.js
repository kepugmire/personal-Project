angular.module('cakeApp').service('mainSvc', function ($http, $state) {


    this.login = function (user) {
        $http.post("/auth/local", user).then(response => {
            $state.go('home')
            return response.data
        }).catch(err => {
            alert(err)
        })
    };


    this.getCakes = function () {
        return $http({
            method: "GET",
            url: '/api/cakes'
        })
    }

    this.getCake = function (id) {
        return $http({
            method: "GET",
            url: '/api/cake/' + id
        })
    }


    this.contact = function (con) {
        return $http({
            method: "POST",
            url: '/api/contacts',
            data: con
        })
    }


    this.getTemp = function (event) {
        return $http.get(`http://api.wunderground.com/api/97eb89c0721b402a/planner_${event.month}${event.day}${event.month}${event.day}/q/UT/${event.city}.json`)
    }

    this.getUser = function() {
        return $http.get('/auth/me').then(function(res){
            return res.data;
        })
        .catch(function(err){
            console.log(err)
        })
    }


    this.postFavorites = function(favObj){
        return $http.post('/postfavorite', favObj)
    }


    this.deleteFav = (notFav) => {
    return $http.delete('/deleteFav/' + notFav)
  }



})