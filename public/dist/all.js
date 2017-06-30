'use strict';

angular.module('cakeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "./app/views/home.html"
    }).state('contact', {
        url: '/contact',
        templateUrl: "./app/views/contact.html",
        controller: "mainCtrl"
    }).state('pricing', {
        url: '/pricing',
        templateUrl: "./app/views/pricing.html"
    }).state('rentals', {
        url: '/rentals',
        templateUrl: "./app/views/rentals.html",
        controller: 'rentalsCtrl'
    }).state('flavors', {
        url: '/flavors',
        templateUrl: "./app/views/flavors.html",
        controller: 'flavorsCtrl'
    }).state('portfolio', {
        url: '/portfolio',
        templateUrl: "./app/views/portfolio.html"
    }).state('desserts', {
        url: '/desserts',
        templateUrl: "./app/views/desserts.html",
        controller: 'dessertsCtrl'
    }).state('cakes', {
        url: '/cakes',
        templateUrl: "./app/views/cakes.html",
        controller: 'cakesCtrl'
    }).state('cake', {
        url: '/cake/:id',
        templateUrl: "./app/views/cake.html",
        controller: 'cakeCtrl'
    }).state('celebration', {
        url: '/celebration',
        templateUrl: "./app/views/celebration.html",
        controller: 'celebrationCtrl'
    }).state('login', {
        url: '/login',
        templateUrl: "./app/views/login.html"
    }).state('favorites', {
        url: '/favorites',
        templateUrl: "./app/views/favorites.html",
        controller: 'mainCtrl'
    });
});
'use strict';

angular.module('cakeApp').controller('cakeCtrl', function ($scope, mainSvc, $stateParams) {

    // console.log('cakeCtrl')

    $scope.getCake = function (response) {
        mainSvc.getCake($stateParams.id).then(function (response) {
            $scope.oneCake = response.data[0];
            // console.log($scope.oneCake)
        });
    };
    $scope.getCake();
});
'use strict';

angular.module('cakeApp').controller('cakesCtrl', function ($scope, mainSvc, $stateParams, $state) {

    $scope.getCakes = function (response) {
        mainSvc.getCakes().then(function (response) {
            $scope.cakes = response.data;
            // console.log($scope.cakes)
        });
    };

    $scope.getCakes();
    // console.log($stateParams.id)

    $scope.cake = function (id) {
        $state.go("cake", { id: id });
    };
});
'use strict';

angular.module('cakeApp').controller('celebrationCtrl', function ($scope, mainSvc) {

    $scope.celebration = ["../app/assets/img/celebration/1t.jpg", "../app/assets/img/celebration/2t.jpg", "../app/assets/img/celebration/3t.jpg", "../app/assets/img/celebration/4t.jpg", "../app/assets/img/celebration/5t.jpg", "../app/assets/img/celebration/6t.jpg", "../app/assets/img/celebration/7t.jpg", "../app/assets/img/celebration/8t.jpg", "../app/assets/img/celebration/9t.jpg", "../app/assets/img/celebration/10t.jpg", "../app/assets/img/celebration/11t.jpg", "../app/assets/img/celebration/12t.jpg", "../app/assets/img/celebration/13t.jpg", "../app/assets/img/celebration/14t.jpg", "../app/assets/img/celebration/15t.jpg", "../app/assets/img/celebration/16t.jpg", "../app/assets/img/celebration/17t.jpg", "../app/assets/img/celebration/18t.jpg", "../app/assets/img/celebration/19t.jpg", "../app/assets/img/celebration/20t.jpg"];
});
'use strict';

angular.module('cakeApp').controller('dessertsCtrl', function ($scope, mainSvc) {

    $scope.desserts = ["../app/assets/img/desserts/1t.jpg", "../app/assets/img/desserts/2t.jpg", "../app/assets/img/desserts/3t.jpg", "../app/assets/img/desserts/4t.jpg", "../app/assets/img/desserts/5t.jpg", "../app/assets/img/desserts/6t.jpg", "../app/assets/img/desserts/7t.jpg", "../app/assets/img/desserts/8t.jpg", "../app/assets/img/desserts/9t.jpg"];
});
'use strict';

angular.module('cakeApp').controller('flavorsCtrl', function ($scope, mainSvc) {});
'use strict';

angular.module('cakeApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.event = {};

    $scope.favorites;

    $scope.sendContact = function (con) {
        con.day = $scope.event.day;
        con.month = $scope.event.month;
        mainSvc.contact(con);
    };

    $scope.recTemp = function (event) {
        mainSvc.getTemp(event).then(function (response) {
            var resp = response.data.trip;
            alert("POSSIBLE WEATHER CONDITIONS FOR YOUR CONSIDERATION:" + "\n\n" + resp.cloud_cover.cond + "\n" + "AVG HIGH: " + resp.temp_high.avg.F + "°" + "\n" + "AVG LOW: " + resp.temp_low.avg.F + "°");
            // console.log(resp)
        });
    };

    $scope.getUser = function () {
        mainSvc.getUser().then(function (user) {
            $scope.favorites = user;
            console.log(user);
        });
    };
    $scope.getUser();

    $scope.addToFavorites = function (fav) {
        var favFound = false;
        for (var i = 0; i < $scope.favorites.favorites.length; i++) {
            if ($scope.favorites.favorites[i].id == fav.id) {
                favFound = true;
                break;
            }
        }
        if (!favFound) {
            var favoriteObj = {
                "userid": $scope.favorites.password,
                "image_path": fav.image_path,
                "id": fav.id
            };
            console.log(favoriteObj);
            mainSvc.postFavorites(favoriteObj).then(function (response) {
                $scope.getUser();
            });
        }
    };

    $scope.deleteFav = function (notFav) {
        mainSvc.deleteFav(notFav).then(function (response) {
            $scope.getUser();
        });
    };
});
'use strict';

angular.module('cakeApp').controller('rentalsCtrl', function ($scope, mainSvc) {

    $scope.rentals = ["../app/assets/img/rentals/r24.jpg", "../app/assets/img/rentals/r23.jpg", "../app/assets/img/rentals/r22.jpg", "../app/assets/img/rentals/r21.jpg", "../app/assets/img/rentals/r20.jpg", "../app/assets/img/rentals/r19.jpg", "../app/assets/img/rentals/r17.jpg", "../app/assets/img/rentals/r16.jpg", "../app/assets/img/rentals/r15.jpg", "../app/assets/img/rentals/r14.jpg", "../app/assets/img/rentals/r13.jpg", "../app/assets/img/rentals/r12.jpg", "../app/assets/img/rentals/r11.jpg", "../app/assets/img/rentals/r10.jpg", "../app/assets/img/rentals/r9.jpg", "../app/assets/img/rentals/r8.jpg", "../app/assets/img/rentals/r7.jpg", "../app/assets/img/rentals/r6.jpg", "../app/assets/img/rentals/r5.jpg", "../app/assets/img/rentals/r4.jpg", "../app/assets/img/rentals/r3.jpg", "../app/assets/img/rentals/r2.jpg", "../app/assets/img/rentals/r1.jpg"];
});
'use strict';

angular.module('cakeApp').service('mainSvc', function ($http, $state) {

    this.login = function (user) {
        $http.post("/auth/local", user).then(function (response) {
            $state.go('home');
            return response.data;
        }).catch(function (err) {
            alert(err);
        });
    };

    this.getCakes = function () {
        return $http({
            method: "GET",
            url: '/api/cakes'
        });
    };

    this.getCake = function (id) {
        return $http({
            method: "GET",
            url: '/api/cake/' + id
        });
    };

    this.contact = function (con) {
        return $http({
            method: "POST",
            url: '/api/contacts',
            data: con
        });
    };

    this.getTemp = function (event) {
        return $http.get('http://api.wunderground.com/api/97eb89c0721b402a/planner_' + event.month + event.day + event.month + event.day + '/q/UT/' + event.city + '.json');
    };

    this.getUser = function () {
        return $http.get('/auth/me').then(function (res) {
            return res.data;
        }).catch(function (err) {
            console.log(err);
        });
    };

    this.postFavorites = function (favObj) {
        return $http.post('/postfavorite', favObj);
    };

    this.deleteFav = function (notFav) {
        return $http.delete('/deleteFav/' + notFav);
    };
});