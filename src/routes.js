const { Router } = require('express');

const discountsRouter = require('./router')

const router = Router();

router.use('/discounts', discountsRouter)

module.exports = router;