const express = require('express')
const bodyParser = require('body-parser')
const clienteRoutes = require('./routes/clienteRoutes')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/v1', clienteRoutes)


module.exports = app