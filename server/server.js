const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const massive = require('massive')
const config = require('./config')
const controller = require('./controller')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
// console.log(config)

massive(config.database).then(db => {
    app.set('db', db)
}).catch(err => {})

var port = 3000;

app.use(bodyParser.json())
app.use(express.static(`${__dirname}./../public/`))
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// **********************************
// **********************************
passport.use(new Auth0Strategy({
        domain: config.auth0.domain,
        clientID: config.auth0.clientID,
        clientSecret: config.auth0.clientSecret,
        callbackURL: '/auth/callback'
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
        // console.log(profile)
        var db = app.get('db')
        //Find user in database
        db.getUserByAuthId(profile.id).then(function (user) {
            user = user[0];
            // console.log(user)
            if (!user) {
                // console.log('CREATING USER');
                db.createUserByAuth([profile.displayName, profile.id]).then(function (user) {
                    // console.log('USER CREATED', user);
                    return done(null, user[0]);
                })
            } else {
                // console.log('FOUND USER', user);
                return done(null, user);
            }
        })
    }
));
passport.serializeUser(function (userA, done) {
    // console.log('serializing', userA);
    var userB = userA;
    done(null, userB); //PUTS 'USER' ON THE SESSION
});
passport.deserializeUser(function (userB, done) {
    var userC = userB;
    app.get('db').getUserAndFaves(userC.password).then(function(response){
        userC.favorites = response
    done(null, userC); //PUTS 'USER' ON REQ.USER
    })
});
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
    passport.authenticate('auth0', {
        successRedirect: '/'
    }),
    function (req, res) {
        res.status(200).send(req.user);
    })
app.get('/auth/me', function (req, res) {
    if (!req.user) return res.sendStatus(404);
    res.status(200).send(req.user);
})
app.get('/auth/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})
// **********************************
// **********************************



// ----- END POINTS ----- //

app.get('/api/cakes', controller.getCakes)
app.get('/api/cake/:id', controller.getCake)
app.post('/api/contacts', controller.contactInfo)
app.post('/postfavorite', controller.postFavorite)
app.delete('/deleteFav/:notFav', controller.deleteFav)





app.listen(port, function () {
    console.log("Started server on port", port);
})