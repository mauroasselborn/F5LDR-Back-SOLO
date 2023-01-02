import { Router } from 'express'
import { getAllBrands, getBrand, createBrand, updateBrand, deleteBrand } from '../controllers/brands.controller.js'

const router = Router()

// Peticiones http
router.get('/brands', getAllBrands)
router.get('/brand/:id', getBrand)
router.post('/brand', createBrand)
router.put('/brand/:id', updateBrand)
router.delete('/brand/:id', deleteBrand)

export default router
