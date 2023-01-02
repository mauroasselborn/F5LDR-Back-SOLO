import { Product, Brand, Category } from '../database/models/index.js'

//Listar todos los productos
export const getAllProducts = async (_req, res) => {
    try {
        const products = await Product.findAll({
            include: [{ model: Brand }, { model: Category }],
        })

        const finalProducts = products.map((product) => {
            const { description, size, value, stock, stock_min } = product
            const { description: brand } = product.Brand
            const { description: category } = product.Category
            return { description, size, value, stock, stock_min, brand, category }
        })

        products.length ? res.status(200).json(finalProducts) : res.json({ message: 'No Products' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Listar un producto por ID
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)
        product === null ? res.json({ message: 'No Products' }) : res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Crea un producto nuevo
export const createProduct = async (req, res) => {
    try {
        // const { name, value, stock, stock_min } = req.body
        const product = await Product.bulkCreate(req.body)
        res.status(201).json({ message: 'Product Created', Created_Product: product })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Actualiza un producto
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)
        product.set(req.body).save()
        res.status(202).json({ message: 'Product Updated', product })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Borra un producto por ID
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.destroy({ where: { id } })
        res.status(202).json({ message: 'Product Deleted', Deleted_Product: product })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
