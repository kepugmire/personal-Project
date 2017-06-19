angular.module('cakeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/')

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



})