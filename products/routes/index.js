const express = require('express')
const productsRoutes = require('./products.js')

module.exports = (app) => {
  const router = express.Router()

  productsRoutes(router)

  app.use('/api', router)
  app.get('/', (req, res) => {
    res.send('Products API is running....')
  })
}