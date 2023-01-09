import { Router } from 'express'
import controller from '../controllers/categories.controller.js'

const router = Router()

// Peticiones http
router.get('/categories', controller.getAllCategories)
router.get('/category/:id', controller.getCategory)
router.post('/category', controller.createCategory)
router.put('/category/:id', controller.updateCategory)
router.delete('/category/:id', controller.deleteCategory)

export default router
