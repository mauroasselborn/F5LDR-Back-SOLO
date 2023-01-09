import { Sale, Product_Sale } from '../database/models/index.js'

//List all Sales
const getAllSales = async (_req, res) => {
    try {
        const sales = await Sale.findAll()
        sales.length ? res.status(200).json(sales) : res.json({ message: 'No Sales' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// List a Sale by ID
const getSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await Sale.findByPk(id)
        sale === null ? res.json({ message: 'No Sales' }) : res.status(200).json(sale)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create a new Sale  SEGUIR ACA 👇🏼
const createSale = async (req, res) => {
    try {
        const product_sale = await Product_Sale.bulkCreate(req.body, {
            include: Product_Sale,
        })
        res.status(201).json({ message: 'Sale Created', Created_Product: sale })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update a Sale by ID
const updateSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await Sale.findByPk(id)
        sale.set(req.body).save()
        res.status(202).json({ message: 'Sale Updated', sale })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete a Sale by ID
const deleteSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await Sale.destroy({ where: { id } })
        res.status(202).json({ message: 'Sale Deleted', Deleted_Sale: sale })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export default { getAllSales, getSale, updateSale, createSale, deleteSale }
