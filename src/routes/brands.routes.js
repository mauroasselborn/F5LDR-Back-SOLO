import { Router } from 'express'
import controller from '../controllers/brands.controller.js'

const router = Router()

// Peticiones http
router.get('/brands', controller.getAllBrands)
router.get('/brand/:id', controller.getBrand)
router.post('/brand', controller.createBrand)
router.put('/brand/:id', controller.updateBrand)
router.delete('/brand/:id', controller.deleteBrand)

export default router
