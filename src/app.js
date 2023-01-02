import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { routsBrands, routsCategories, routsProducts, routsSales } from './routes/index.routes.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Uso de rutas
app.use(routsProducts)
app.use(routsBrands)
app.use(routsCategories)
app.use(routsSales)

app.use((_req, res) => {
    res.status(404).json({ message: 'Page Not Found' })
})

export default app
