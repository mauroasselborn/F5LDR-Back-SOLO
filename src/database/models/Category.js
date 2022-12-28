import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Category'
const model = {}
const options = { timestamps: false }

export const Category = connection.define(modelName, model, options)
