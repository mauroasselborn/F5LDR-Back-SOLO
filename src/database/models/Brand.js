import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Brand'
const options = { timestamps: false }

export const Brand = connection.define(
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
Brand.sync({ force: true })
