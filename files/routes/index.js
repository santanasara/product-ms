const express = require('express')
const path = require('path')
const uploadFiles = require('./uploadFiles.js')

module.exports = (app) => {
  const router = express.Router()

  uploadFiles(router)

  const __dirname = path.resolve()
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
}