const {
  validateToken,
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controllers/authController.js')
const { protect, admin } = require('../middlewares/protect.js')

module.exports = (router) => {
  router
    .post('/validateToken', validateToken)
  router
    .route('/register')
    .post(registerUser)
    .get(protect, admin, getUsers)
  router
    .post('/login', authUser)
  router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
  router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
}