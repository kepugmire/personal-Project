const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const massive = require('massive')
const config = require('./config')
const controller = require('./controller')
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





// ----- END POINTS ----- //

app.get("/auth/me", (req, res) => {
    if (req.session.user) {
        // console.log(req.session.user)
        res.send(req.session.user)
    } else {
        res.status(404).send("User not found")
    }
})

app.post("/auth/local", (req, res) => {
    var db = req.app.get('db')
    db.checkLogin([req.body.username, req.body.password]).then(user => {
        if (user.length === 0) {
            res.status(404).send("User not found")
        } else {
            req.session.user = user[0]
            res.status(200).send(user[0])
        }
    })
})

// var db = req.app.get('db')

// console.log(db)


app.get('/api/cakes', controller.getCakes)
app.get('/api/cake/:id', controller.getCake)
app.post('/api/contacts', controller.contactInfo)


// app.post("/auth/createuser", (req, res) => {

// })






app.listen(port, function () {
    console.log("Started server on port", port);
})