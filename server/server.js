const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const massive = require('massive')
const config = require('./config')
console.log(config)

var port = 3000;

app.use(bodyParser.json())
app.use(express.static(`${__dirname}./../public/`))


massive (config.database).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log(err)
}) 















app.listen(port, function () {
    console.log("Started server on port", port);
})