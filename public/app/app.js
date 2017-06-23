angular.module('cakeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: "./app/views/home.html"
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

        .state('portfolio', {
            url: '/portfolio',
            templateUrl: "./app/views/portfolio.html",
        })

        .state('desserts', {
            url: '/desserts',
            templateUrl: "./app/views/desserts.html",
            controller: 'dessertsCtrl'
        })
        
        .state('cakes', {
            url: '/cakes',
            templateUrl: "./app/views/cakes.html",
            controller: 'cakesCtrl'
        })

        .state('celebration', {
            url: '/celebration',
            templateUrl: "./app/views/celebration.html",
            controller: 'celebrationCtrl'
        })

        .state('login', {
            url: '/login',
            templateUrl: "./app/views/login.html",
            controller: 'loginCtrl'
        })

})