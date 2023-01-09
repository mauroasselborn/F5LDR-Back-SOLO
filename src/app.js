import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import Routes from './routes/index.routes.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Uso de rutas
app.use(Routes.routsProducts)
app.use(Routes.routsBrands)
app.use(Routes.routsCategories)
app.use(Routes.routsSales)

app.use((_req, res) => {
    res.status(404).json({ message: 'Page Not Found' })
})

export default app
