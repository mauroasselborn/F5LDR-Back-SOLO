import { Brand } from '../database/models/index.js'

//List all Brands
const getAllBrands = async (_req, res) => {
    try {
        const brans = await Brand.findAll()

        const output = brans.map((brand, index) => {
            return { id: brand.id, Descripcion: brand.description }
        })

        brans.length ? res.status(200).json(output) : res.json({ message: 'No Brands' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// List a Brand by ID
const getBrand = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findByPk(id)
        brand === null ? res.json({ message: 'No Brands' }) : res.status(200).json(brand)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create a new Brand
const createBrand = async (req, res) => {
    try {
        const brand = await Brand.create(req.body)
        //👆🏼 comentar, 👇🏼 descomentar para hacer la poblacion de la tabla "brads" con multiples objetos por "post"
        // const brand = await Brand.bulkCreate(req.body)
        res.status(201).json({ message: 'Brand Created', Created_Brand: brand })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update a Brand by ID
const updateBrand = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findByPk(id)
        brand.set(req.body).save()
        res.status(202).json({ message: 'Brand Updated', Update_Brand: brand })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete a Brand by ID
const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.destroy({ where: { id } })
        res.status(202).json({ message: 'Brand Deleted', Deleted_Brand: brand })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export default { getAllBrands, getBrand, createBrand, deleteBrand, updateBrand }
