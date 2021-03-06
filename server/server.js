const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const massive = require('massive')
const config = require('./config')
const controller = require('./controller')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')


var port = 3000;


//======== UNCOMMENT THE FOLLOWING FOR LOCALHOST EDITTING ========//
app.use(bodyParser.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: config.sessionSecret
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}./../public/`))

massive(config.connectionString).then(db => {
    app.set('db', db)
}).catch(err => {})

//======== UNCOMMENT THE FOLLOWING FOR HOSTING ========//

// app.use(bodyParser.json())
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.sessionSecret
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(`${__dirname}./../public/`))

// massive(process.env.connectionString).then(db => {
//     app.set('db', db)
// }).catch(err => {})



// **********************************
// **********************************

//======== UNCOMMENT THE FOLLOWING FOR LOCALHOST ========//
passport.use(new Auth0Strategy({
        domain: config.domain,
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: '/auth/callback'
    },

//======== UNCOMMENT THE FOLLOWING FOR HOSTING ========//
// passport.use(new Auth0Strategy({
//         domain: process.env.domain,
//         clientID: process.env.clientID,
//         clientSecret: process.env.clientSecret,
//         callbackURL: '/auth/callback'
//     },
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


// ----- LISTENING ----- //
app.listen(process.env.PORT || port, function () {
    console.log("Started server on port", this.address().port);
})