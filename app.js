const express = require('express')
const logger = require('morgan')

const app = express()

// DB connection
require('./db/database-connection')

// Middlewares
app.use(logger('dev'))
app.use(express.json())

// Routes
app.use('/', require('./routes/cohort.routes'))
app.use('/', require('./routes/student.routes'))

// Server listen
app.listen(5005, () => console.log('Express levantado en el puerto 5005'))