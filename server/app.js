import express, { json } from 'express'
import { corsMiddleware } from './middleware/cors.js'
import { createRouter } from './routes/routes.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/users', createRouter())

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})
