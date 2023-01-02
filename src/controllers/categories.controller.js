import { Category } from '../database/models/index.js'

//Listar todas las Categories
export const getAllCategories = async (_req, res) => {
    try {
        const categories = await Category.findAll()
        categories.length ? res.status(200).json(categories) : res.json({ message: 'No Categories' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Listar una Category por ID
export const getCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByPk(id)
        category === null ? res.json({ message: 'No Categories' }) : res.status(200).json(category)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Crea una Category nueva
export const createCategory = async (req, res) => {
    try {
        // const { name, value, stock, stock_min } = req.body
        const category = await Category.bulkCreate(req.body)
        res.status(201).json({ message: 'Category Created', Created_Product: category })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Actualiza una Category por ID
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByPk(id)
        category.set(req.body).save()
        res.status(202).json({ message: 'Category Updated', category })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Borra una Category por ID
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.destroy({ where: { id } })
        res.status(202).json({ message: 'Category Deleted', Deleted_Product: category })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
