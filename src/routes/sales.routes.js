import { Router } from 'express'
import { getAllSales, getSale, createSale, updateSale, deleteSale } from '../controllers/sales.controller.js'

const router = Router()

// Peticiones http
router.get('/sales', getAllSales)
router.get('/sale/:id', getSale)
router.post('/sale', createSale)

// Controladores realizados pero actualmente esta funcionalidad no estara disponible ya que para actualizar y borrar se requeriran credenciales
// router.put('/sale/:id', updateSale)
// router.delete('/sale/:id', deleteSale)

export default router
