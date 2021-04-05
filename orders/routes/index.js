const express = require('express')
const ordersRoutes = require('./orders.js')

module.exports = (app) => {
  const router = express.Router()

  ordersRoutes(router)

  app.use('/api', router)
  app.get('/', (req, res) => {
    res.send('Products API is running....')
  })
}