import { DataTypes } from 'sequelize'
import { connection } from '../connection.js'
import Product from './Product.js'
import Sale from './Sale.js'

const modelName = 'Product_Sale'
const options = { timestamps: false }

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}

const Product_Sale = connection.define(modelName, model, options)

Product.belongsToMany(Sale, {
    through: Product_Sale,
    foreignKey: 'product_id',
    timestamps: false,
})

Sale.belongsToMany(Product, {
    through: Product_Sale,
    foreignKey: 'sale_id',
    timestamps: false,
})

export default Product_Sale
