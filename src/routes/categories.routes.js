import { Router } from 'express'
import {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers/categories.controller.js'

const router = Router()

// Peticiones http
router.get('/categories', getAllCategories)
router.get('/category/:id', getCategory)
router.post('/category', createCategory)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)

export default router
