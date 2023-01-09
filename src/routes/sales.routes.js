import { Router } from 'express'
import controller from '../controllers/sales.controller.js'

const router = Router()

// Peticiones http
router.get('/sales', controller.getAllSales)
router.get('/sale/:id', controller.getSale)
router.post('/sale', controller.createSale)

// Controladores realizados pero actualmente esta funcionalidad no estara disponible ya que para actualizar y borrar se requeriran credenciales
// router.put('/sale/:id', controller.updateSale)
// router.delete('/sale/:id', controller.deleteSale)

export default router
