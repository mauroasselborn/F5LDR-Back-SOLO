import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Category'
const options = { timestamps: false }

export const Category = connection.define(
    modelName,
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    options
)
Category.sync({ force: true })
