import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Product'
const options = { timestamps: false }

export const Product = connection.define(
    modelName,
    {
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
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
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
    },
    options
)

Product.sync({ force: true })
