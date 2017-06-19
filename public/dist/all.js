'use strict';

angular.module('cakeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    // $stateProvider
    //     .state('home', {
    //         url: '/',
    //         templateUrl: "./views/home.html"
    //     })


    // .state('blank', {
    //     url: '/blank',
    //     templateUrl: "./views/blank.html"
    // })
    // .state('blank', {
    //     url: '/blank',
    //     templateUrl: "./views/blank.html"
    // })
    // .state('blank', {
    //     url: '/blank',
    //     templateUrl: "./views/blank.html",
    //     controller: 'blankCtrl'
    // })
    // .state('product-details', {
    //     url: '/product-details/:id',
    //     templateUrl: "./views/product-details.html",
    //     controller: 'productDetailsCtrl'
    // })

});
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

angular.module('cakeApp').service('mainSvc', function ($http) {

    this.test = "Svc is working";

    // this.getData = function(){
    //     return $http.get('https://practiceapi.devmountain.com/products')
    // }

    // this.getId = function(id){
    //     return $http.get('https://practiceapi.devmountain.com/products/' + id)
    // }
});