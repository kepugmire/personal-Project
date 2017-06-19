const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const massive = require('massive')

var port = 3000;

app.use(bodyParser.json())
app.use(express.static(`${__dirname}./../public/`))


massive({
    host: 'localhost',
    port: 3000,
    database: config.database,
    user: config.user,
    password: config.password
})















app.listen(port, function () {
    console.log("Started server on port", port);
})