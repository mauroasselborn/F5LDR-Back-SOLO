import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Product_Sale'
const options = { timestamps: false }

export const Product_Sale = connection.define(
    modelName,
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sale_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    options
)
Product_Sale.sync({ force: true })
