import { Brand } from '../database/models/index.js'
//Listar todos los brands
export const getAllBrands = async (_req, res) => {
    try {
        const brans = await Brand.findAll()
        brans.length ? res.status(200).json(brans) : res.json({ message: 'No Brands' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Listar un brand por ID
export const getBrand = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findByPk(id)
        brand === null ? res.json({ message: 'No Brands' }) : res.status(200).json(brand)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Crea un brand nuevo
export const createBrand = async (req, res) => {
    try {
        // const { name, value, stock, stock_min } = req.body
        const brand = await Brand.bulkCreate(req.body)
        res.status(201).json({ message: 'Brand Created', Created_Brand: brand })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Actualiza un brand
export const updateBrand = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findByPk(id)
        brand.set(req.body).save()
        res.status(202).json({ message: 'Brand Updated', Update_Brand: brand })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Borra un brand por ID
export const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.destroy({ where: { id } })
        res.status(202).json({ message: 'Brand Deleted', Deleted_Brand: brand })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
