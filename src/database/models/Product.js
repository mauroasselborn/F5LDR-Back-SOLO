import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Product'
const model = {}
const options = { timestamps: false }

export const Product = connection.define(modelName, model, options)
