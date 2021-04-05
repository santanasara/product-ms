const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} = require('../controllers/ordersController.js')
const { protect, admin } = require('../middlewares/protect.js')

module.exports = (router) => {
  router
    .route('/')
    .post(protect, addOrderItems)
    .get(protect, admin, getOrders)
  router
    .route('/myorders')
    .get(protect, getMyOrders)
  router
    .route('/:id')
    .get(protect, getOrderById)
  router
    .route('/:id/pay')
    .put(protect, updateOrderToPaid)
  router
    .route('/:id/deliver')
    .put(protect, admin, updateOrderToDelivered)
}