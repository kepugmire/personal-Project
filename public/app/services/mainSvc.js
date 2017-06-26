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


    this.getCakes = function () {
        return $http({
            method: "GET",
            url: '/api/cakes'
        })
    }

    this.getCake = function (id) {
        return $http({
            method: "GET",
            url: '/api/cake/' + id
        })
    }


    this.contact = function (firstname, lastname, email, subject, day, month, year, message, referral) {
        // console.log(firstname, lastname, email, subject, day, month, year, message, referral)
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
        })
    }





    // this.getData = function(){
    //     return $http.get('https://practiceapi.devmountain.com/products')
    // }

    // this.getId = function(id){
    //     return $http.get('https://practiceapi.devmountain.com/products/' + id)
    // }

})