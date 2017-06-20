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
"use strict";
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
"use strict";
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