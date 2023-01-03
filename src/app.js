import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import Routes from './routes'

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Uso de rutas
app.use(Routes.Brands)
app.use(Routes.Products)
app.use(Routes.Categories)
app.use(Routes.Sales)

app.use((_req, res) => {
    res.status(404).json({ message: 'Page Not Found' })
})

export default app
