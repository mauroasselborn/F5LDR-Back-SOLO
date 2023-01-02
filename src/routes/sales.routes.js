import { Router } from 'express'
import { getAllSales, getSale, createSale, updateSale, deleteSale } from '../controllers/sales.controller.js'

const router = Router()

// Peticiones http
router.get('/sales', getAllSales)
router.get('/sale/:id', getSale)
router.post('/sale', createSale)
router.put('/sale/:id', updateSale)
router.delete('/sale/:id', deleteSale)

export default router
