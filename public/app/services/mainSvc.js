angular.module('cakeApp').service('mainSvc', function ($http, $state) {

    this.test = "Svc is working"



    this.login = function (user) {
        $http.post("/auth/local", user).then(response => {
            $state.go('home')
            return response.data
        }).catch(err => {
            alert(err)
        })
    };




    // this.getData = function(){
    //     return $http.get('https://practiceapi.devmountain.com/products')
    // }

    // this.getId = function(id){
    //     return $http.get('https://practiceapi.devmountain.com/products/' + id)
    // }

})