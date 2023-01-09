import { Category } from '../database/models/index.js'

//List all Categories
const getAllCategories = async (_req, res) => {
    try {
        const categories = await Category.findAll()
        categories.length ? res.status(200).json(categories) : res.json({ message: 'No Categories' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// List a Category by ID
const getCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByPk(id)
        category === null ? res.json({ message: 'No Categories' }) : res.status(200).json(category)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create a new Category
const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        //👆🏼 comentar, 👇🏼 descomentar para hacer la poblacion de la tabla "categories" con multiples objetos por "post"
        // const category = await Category.bulkCreate(req.body)

        res.status(201).json({ message: 'Category Created', Created_Product: category })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update a Category by ID
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByPk(id)
        category.set(req.body).save()
        res.status(202).json({ message: 'Category Updated', category })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete a Category by ID
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.destroy({ where: { id } })
        res.status(202).json({ message: 'Category Deleted', Deleted_Product: category })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export default { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory }
