import { Sale } from '../database/models/index.js'

//Listar todos las Ventas
export const getAllSales = async (_req, res) => {
    try {
        const sales = await Sale.findAll()
        sales.length ? res.status(200).json(sales) : res.json({ message: 'No Sales' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Listar una Sale por ID
export const getSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await Sale.findByPk(id)
        sale === null ? res.json({ message: 'No Sales' }) : res.status(200).json(sale)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Crea una Sale nuevo
export const createSale = async (req, res) => {
    try {
        // const { name, value, stock, stock_min } = req.body
        const sale = await Sale.create(req.body)
        res.status(201).json({ message: 'Sale Created', Created_Product: sale })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Actualiza una Sale
export const updateSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await Sale.findByPk(id)
        sale.set(req.body).save()
        res.status(202).json({ message: 'Sale Updated', sale })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Borra una Sale por ID
export const deleteSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await Sale.destroy({ where: { id } })
        res.status(202).json({ message: 'Sale Deleted', Deleted_Sale: sale })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
