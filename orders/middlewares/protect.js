const asyncHandler = require('express-async-handler')
const { validateToken } = require('../externalAPI/authAPI.js')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]

    const { user, isValid } = await validateToken(token)
    if (!isValid) {
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
    
    req.user = user

    next()
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

module.exports = { protect, admin }