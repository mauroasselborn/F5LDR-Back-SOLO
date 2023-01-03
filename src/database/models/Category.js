import { DataTypes } from 'sequelize'
import { connection } from '../connection.js'

const modelName = 'Category'
const options = { timestamps: true }

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}

const Category = connection.define(modelName, model, options)

export default Category
