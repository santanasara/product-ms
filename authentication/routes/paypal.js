module.exports = router => {
  router.get('/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
  )
}