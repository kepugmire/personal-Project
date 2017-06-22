'use strict';

angular.module('cakeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "./app/views/home.html"
    }).state('cakes', {
        url: '/portfolio',
        templateUrl: "./app/views/cakes.html",
        controller: 'cakesCtrl'
    }).state('contact', {
        url: '/contact',
        templateUrl: "./app/views/contact.html"
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
    });
});
"use strict";
'use strict';

angular.module('cakeApp').controller('flavorsCtrl', function ($scope, mainSvc) {});
'use strict';

angular.module('cakeApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.test = mainSvc.test;

    // $scope.getData = function(){
    //     shopService.getData().then(function(response){
    //         $scope.product = response.data
    //     })
    // }

    // $scope.getData()
});
'use strict';

angular.module('cakeApp').controller('rentalsCtrl', function ($scope, mainSvc) {

    $scope.rentals = ["../app/assets/img/rentals/r24.jpg", "../app/assets/img/rentals/r23.jpg", "../app/assets/img/rentals/r22.jpg", "../app/assets/img/rentals/r21.jpg", "../app/assets/img/rentals/r20.jpg", "../app/assets/img/rentals/r19.jpg", "../app/assets/img/rentals/r17.jpg", "../app/assets/img/rentals/r16.jpg", "../app/assets/img/rentals/r15.jpg", "../app/assets/img/rentals/r14.jpg", "../app/assets/img/rentals/r13.jpg", "../app/assets/img/rentals/r12.jpg", "../app/assets/img/rentals/r11.jpg", "../app/assets/img/rentals/r10.jpg", "../app/assets/img/rentals/r9.jpg", "../app/assets/img/rentals/r8.jpg", "../app/assets/img/rentals/r7.jpg", "../app/assets/img/rentals/r6.jpg", "../app/assets/img/rentals/r5.jpg", "../app/assets/img/rentals/r4.jpg", "../app/assets/img/rentals/r3.jpg", "../app/assets/img/rentals/r2.jpg", "../app/assets/img/rentals/r1.jpg"];
});
'use strict';

angular.module('cakeApp').service('mainSvc', function ($http) {

    this.test = "Svc is working";

    // this.getData = function(){
    //     return $http.get('https://practiceapi.devmountain.com/products')
    // }

    // this.getId = function(id){
    //     return $http.get('https://practiceapi.devmountain.com/products/' + id)
    // }
});