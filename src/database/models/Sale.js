import { DataTypes } from 'sequelize'
import { connection } from '../connect.js'

const modelName = 'Sale'
const model = {}
const options = { timestamps: false }

export const Sale = connection.define(modelName, model, options)
