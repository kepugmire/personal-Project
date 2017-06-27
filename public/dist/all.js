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
        templateUrl: "./app/views/login.html",
        controller: 'loginCtrl'
    });
});
'use strict';

angular.module('cakeApp').controller('cakeCtrl', function ($scope, mainSvc, $stateParams) {

    console.log('cakeCtrl');

    $scope.getCake = function (response) {
        mainSvc.getCake($stateParams.id).then(function (response) {
            $scope.oneCake = response.data[0];
            console.log($scope.oneCake);
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

angular.module('cakeApp').controller('loginCtrl', function ($scope, mainSvc) {

    $scope.login = function (user) {
        mainSvc.login(user);
    };
});
'use strict';

angular.module('cakeApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.test = mainSvc.test;

    $scope.sendContact = function () {
        // console.log("something", $scope.firstnname)
        mainSvc.contact($scope.firstnname, $scope.lastnname, $scope.e_mail, $scope.ssubject, $scope.dday, $scope.mmonth, $scope.yyear, $scope.mmessage, $scope.rreferral);
    };
});
'use strict';

angular.module('cakeApp').controller('rentalsCtrl', function ($scope, mainSvc) {

    $scope.rentals = ["../app/assets/img/rentals/r24.jpg", "../app/assets/img/rentals/r23.jpg", "../app/assets/img/rentals/r22.jpg", "../app/assets/img/rentals/r21.jpg", "../app/assets/img/rentals/r20.jpg", "../app/assets/img/rentals/r19.jpg", "../app/assets/img/rentals/r17.jpg", "../app/assets/img/rentals/r16.jpg", "../app/assets/img/rentals/r15.jpg", "../app/assets/img/rentals/r14.jpg", "../app/assets/img/rentals/r13.jpg", "../app/assets/img/rentals/r12.jpg", "../app/assets/img/rentals/r11.jpg", "../app/assets/img/rentals/r10.jpg", "../app/assets/img/rentals/r9.jpg", "../app/assets/img/rentals/r8.jpg", "../app/assets/img/rentals/r7.jpg", "../app/assets/img/rentals/r6.jpg", "../app/assets/img/rentals/r5.jpg", "../app/assets/img/rentals/r4.jpg", "../app/assets/img/rentals/r3.jpg", "../app/assets/img/rentals/r2.jpg", "../app/assets/img/rentals/r1.jpg"];
});
'use strict';

angular.module('cakeApp').service('mainSvc', function ($http, $state) {

    this.test = "Svc is working";

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

    this.contact = function (firstname, lastname, email, subject, day, month, year, message, referral) {
        return $http({
            method: "POST",
            url: '/api/contacts',
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                subject: subject,
                day: day,
                month: month,
                year: year,
                message: message,
                referral: referral
            }
        });
    };

    // this.getData = function(){
    //     return $http.get('https://practiceapi.devmountain.com/products')
    // }

    // this.getId = function(id){
    //     return $http.get('https://practiceapi.devmountain.com/products/' + id)
    // }
});