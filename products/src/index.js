import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api', productRoutes)


app.get('/', (req, res) => {
    res.send('API is running....')
})


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running mode on port ${PORT}`
  )
)
