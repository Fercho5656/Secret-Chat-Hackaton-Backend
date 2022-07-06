import express from 'express'
import cors from 'cors'
import { PORT } from './env'
import getAccesTokenRouter from './routes/api/get-access-token'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.use('/api/get-access-token', getAccesTokenRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
