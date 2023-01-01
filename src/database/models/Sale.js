import { DataTypes } from 'sequelize'
import { connection } from '../connection.js'

const modelName = 'Sale'
const options = { timestamps: true }

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}

const Sale = connection.define(modelName, model, options)

// await Sale.sync({ alter: true })

export default Sale
