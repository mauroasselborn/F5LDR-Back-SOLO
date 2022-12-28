import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Brand'
const model = {}
const options = { timestamps: false }

export const Brand = connection.define(modelName, model, options)
