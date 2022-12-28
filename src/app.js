import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connection } from './database/connect.js'

import rutaProductos from './routes/products.routes.js'

const app = express()

connection.authenticate()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Uso de rutas
app.use(rutaProductos)

app.use((req, res) => {
    res.status(404).json({ message: 'Page Not Found' })
})

export default app
