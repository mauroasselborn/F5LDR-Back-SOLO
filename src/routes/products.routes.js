import { Router } from 'express'
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js'

const router = Router()

// Peticiones http
router.get('/products', getAllProducts)
router.get('/product/:id', getProduct)
router.post('/product', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

export default router
