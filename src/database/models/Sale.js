import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Sale'
const options = { timestamps: false }

export const Sale = connection.define(
    modelName,
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    },
    options
)

Sale.sync({ force: true })
