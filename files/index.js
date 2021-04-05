const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const { notFound, errorHandler } = require('./middlewares/error.js')
const cors = require('./middlewares/cors.js')

const routes = require('./routes')

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Allow cors
cors(app)

// Set routes
routes(app)

// Error middleware handle responses with error
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)