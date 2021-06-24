/** @format */

import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

import emailRoutes from './routes/emailRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())

app.use('/api/email', emailRoutes)
app.use('/api/admin', adminRoutes)

app.get('/', (req, res) => {
  res.send('API is Running...')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
