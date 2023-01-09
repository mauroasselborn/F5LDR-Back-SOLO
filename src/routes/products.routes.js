import { Router } from 'express'
import controller from '../controllers/products.controller.js'

const router = Router()

// Peticiones http
router.get('/products', controller.getAllProducts)
router.get('/product/:id', controller.getProduct)
router.post('/product', controller.createProduct)
router.put('/product/:id', controller.updateProduct)
router.delete('/product/:id', controller.deleteProduct)

export default router
