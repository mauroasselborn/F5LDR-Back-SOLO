import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Product_Sale'
const model = {}
const options = { timestamps: false }

export const Product_Sale = connection.define(modelName, model, options)
