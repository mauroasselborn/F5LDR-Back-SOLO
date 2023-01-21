import { Product, Brand, Category } from '../database/models/index.js'

//List all Products
const getAllProducts = async (_req, res) => {
    try {
        const products = await Product.findAll({
            include: [Brand, Category],
        })

        const output = products.map((product) => ({
            id: product.id,
            Descripcion: product.description,
            Tamaño: product.size,
            valor: product.value,
            stock: product.stock,
            stock_min: product.stock_min,
            Marca: product.Brand.description,
            Categoria: product.Category.description,
        }))

        products.length ? res.status(200).json(output) : res.json({ message: 'No Products' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// List a Product by ID
const getProduct = async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findByPk(id, {
            include: [Brand, Category],
        })

        product === null ? res.json({ message: 'No Products' }) : res.status(200).json({ product })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create a new Product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        //👆🏼 comentar, 👇🏼 descomentar para hacer la poblacion de la tabla "products" con multiples objetos por "post"
        // const product = await Product.bulkCreate(req.body)

        res.status(201).json({ message: 'Product Created', Created_Product: product })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update a Product by ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)
        pro.set(req.body).save()

        res.status(202).json({ message: 'Product Updated', product })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete a Product by ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.destroy({ where: { id } })
        res.status(202).json({ message: 'Product Deleted', Deleted_Product: product })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export default { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct }
