const express = require('express')
const authRoutes = require('./auth.js')
const paypalRoutes = require('./paypal.js')

module.exports = (app) => {
  const router = express.Router()

  authRoutes(router)
  paypalRoutes(router)

  app.use('/api', router)
  app.get('/', (req, res) => {
    res.send('Auth API is running....')
  })
}