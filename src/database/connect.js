import { Sequelize } from 'sequelize'
import { config } from 'dotenv'
config()

const DB_PORT = process.env.DB_PORT
const DB_DATABASE = process.env.DB_DATABASE
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST

export const connection = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    port: DB_PORT,
    host: DB_HOST,
})
