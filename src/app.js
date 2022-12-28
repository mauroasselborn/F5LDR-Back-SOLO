import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routsProducts from './routes/products.routes.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Uso de rutas
app.use(routsProducts)

app.use((req, res) => {
    res.status(404).json({ message: 'Page Not Found' })
})

export default app
