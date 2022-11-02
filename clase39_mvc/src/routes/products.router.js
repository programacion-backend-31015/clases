const { Router } = require('express')
const productController = require('../controllers/products.controller')

const productRouter = new Router()

productRouter.get('/', productController.getProductController)
productRouter.get('/api', productController.getAPIProductController)

module.exports = { productRouter }