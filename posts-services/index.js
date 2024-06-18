import express from 'express'
import { randomBytes } from 'crypto'

const app = express()

const posts = {}

app.use(express.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body

    posts[id] = { id, title }

    res.status(201).send(posts[id])
})

app.listen(4000, () => {
    console.log('Posts service is running on port 4000')
})