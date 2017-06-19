const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var port = 3000;

app.use(bodyParser.json())
app.use(express.static(`${__dirname}./../public/`))

















app.listen(port, function () {
    console.log("Started server on port", port);
})