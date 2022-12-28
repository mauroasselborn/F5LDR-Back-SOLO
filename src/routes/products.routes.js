import { Router } from 'express'
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js'

const router = Router()

// Peticiones http
router.get('/products', getAllProducts)
router.get('/products/:id', getProduct)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router
