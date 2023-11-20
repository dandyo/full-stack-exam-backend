require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const cors = require('cors')

//express app
const app = express()

//middleware
app.use(express.json())

app.use(cors({
    origin: ['https://mern-frontend-lemon-psi.vercel.app', 'http://localhost:4000', 'http://localhost:3000']
}))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen
        app.listen(process.env.PORT, () => {
            console.log('listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })