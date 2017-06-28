module.exports = {
    
    getCakes: function (req, res, next) {
        req.app.get('db').getCakes().then(function (response) {
            // console.log(response)
            res.send(response);
        })
    },

    getCake: function (req, res, next) {
        // console.log("test", req.params.id)
        req.app.get('db').getCake(req.params.id).then(function(response) {
            res.send(response)
        }).catch(function(err){
            console.log(err)
        })
    },

    contactInfo: function (req, res, next) {
        console.log(req.body)
        var contact = [req.body.firstname, req.body.lastname, req.body.email, req.body.subject, req.body.day, req.body.month, req.body.year, req.body.message, req.body.referral]
        req.app.get('db').contactInfo(contact).then(function(response){
            res.send("Contact info submitted")
        })
    }




    
}