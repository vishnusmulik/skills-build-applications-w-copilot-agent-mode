import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 8000
const MONGO_URL = 'mongodb://127.0.0.1:27017/octofit'

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', port: PORT, mongodbPort: 27017 })
})

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Connected to MongoDB at ${MONGO_URL}`)
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

app.listen(PORT, () => {
  console.log(`Octofit backend listening on http://localhost:${PORT}`)
})
