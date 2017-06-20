angular.module('cakeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: "./app/views/home.html"
        })

        .state('cakes', {
            url: '/portfolio',
            templateUrl: "./app/views/cakes.html",
            controller: 'cakesCtrl'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: "./app/views/contact.html"
        })

        .state('pricing', {
            url: '/pricing',
            templateUrl: "./app/views/pricing.html"
        })

        .state('rentals', {
            url: '/rentals',
            templateUrl: "./app/views/rentals.html",
            controller: 'rentalsCtrl'
        })

        .state('flavors', {
            url: '/flavors',
            templateUrl: "./app/views/flavors.html",
            controller: 'flavorsCtrl'
        })


})