'use strict';

angular.module('cakeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "./app/views/home.html"
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

angular.module('cakeApp').controller('cakesCtrl', function ($scope, mainSvc) {

    $scope.cakes = ["../app/assets/img/cakes/1t.jpg", "../app/assets/img/cakes/2t.jpg", "../app/assets/img/cakes/3t.jpg", "../app/assets/img/cakes/4t.jpg", "../app/assets/img/cakes/5t.jpg", "../app/assets/img/cakes/6t.jpg", "../app/assets/img/cakes/7t.jpg", "../app/assets/img/cakes/8t.jpg", "../app/assets/img/cakes/9t.jpg", "../app/assets/img/cakes/10t.jpg", "../app/assets/img/cakes/12t.jpg", "../app/assets/img/cakes/13t.jpg", "../app/assets/img/cakes/14t.jpg", "../app/assets/img/cakes/15t.jpg", "../app/assets/img/cakes/16t.jpg", "../app/assets/img/cakes/17t.jpg", "../app/assets/img/cakes/18t.jpg", "../app/assets/img/cakes/19t.jpg", "../app/assets/img/cakes/20t.jpg", "../app/assets/img/cakes/21t.jpg", "../app/assets/img/cakes/22t.jpg", "../app/assets/img/cakes/23t.jpg", "../app/assets/img/cakes/24t.jpg", "../app/assets/img/cakes/25t.jpg", "../app/assets/img/cakes/26t.jpg", "../app/assets/img/cakes/27t.jpg", "../app/assets/img/cakes/28t.jpg", "../app/assets/img/cakes/29t.jpg", "../app/assets/img/cakes/30t.jpg", "../app/assets/img/cakes/31t.jpg", "../app/assets/img/cakes/32t.jpg", "../app/assets/img/cakes/33t.jpg", "../app/assets/img/cakes/34t.jpg", "../app/assets/img/cakes/35t.jpg", "../app/assets/img/cakes/36t.jpg", "../app/assets/img/cakes/37t.jpg", "../app/assets/img/cakes/38t.jpg", "../app/assets/img/cakes/39t.jpg", "../app/assets/img/cakes/40t.jpg", "../app/assets/img/cakes/41t.jpg", "../app/assets/img/cakes/42t.jpg", "../app/assets/img/cakes/43t.jpg", "../app/assets/img/cakes/44t.jpg", "../app/assets/img/cakes/45t.jpg", "../app/assets/img/cakes/46t.jpg", "../app/assets/img/cakes/47t.jpg", "../app/assets/img/cakes/48t.jpg", "../app/assets/img/cakes/49t.jpg", "../app/assets/img/cakes/50t.jpg", "../app/assets/img/cakes/51t.jpg", "../app/assets/img/cakes/52t.jpg", "../app/assets/img/cakes/53t.jpg", "../app/assets/img/cakes/54t.jpg", "../app/assets/img/cakes/55t.jpg", "../app/assets/img/cakes/56t.jpg", "../app/assets/img/cakes/57t.jpg", "../app/assets/img/cakes/58t.jpg", "../app/assets/img/cakes/59t.jpg", "../app/assets/img/cakes/60t.jpg", "../app/assets/img/cakes/61t.jpg", "../app/assets/img/cakes/62t.jpg", "../app/assets/img/cakes/63t.jpg", "../app/assets/img/cakes/64t.jpg", "../app/assets/img/cakes/65t.jpg", "../app/assets/img/cakes/66t.jpg", "../app/assets/img/cakes/67t.jpg", "../app/assets/img/cakes/68t.jpg", "../app/assets/img/cakes/69t.jpg", "../app/assets/img/cakes/70t.jpg", "../app/assets/img/cakes/71t.jpg", "../app/assets/img/cakes/72t.jpg", "../app/assets/img/cakes/73t.jpg"];
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

    // this.getData = function(){
    //     return $http.get('https://practiceapi.devmountain.com/products')
    // }

    // this.getId = function(id){
    //     return $http.get('https://practiceapi.devmountain.com/products/' + id)
    // }
});