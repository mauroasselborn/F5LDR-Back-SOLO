import { DataTypes } from 'sequelize'
import { connection } from '../connection.js'
import Brand from './Brand.js'
import Category from './Category.js'

const modelName = 'Product'
const options = { timestamps: true }

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    stock_min: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}

const Product = connection.define(modelName, model, options)

Brand.hasMany(Product, {
    foreignKey: 'brand_id',
    sourceKey: 'id',
})

Product.belongsTo(Brand, {
    foreignKey: 'brand_id',
    targetKey: 'id',
})

Category.hasMany(Product, {
    foreignKey: 'category_id',
    sourceKey: 'id',
})

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    targetKey: 'id',
})

// await Product.sync({ alter: true })

export default Product
