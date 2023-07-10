const express = require('express')
const { connection } = require('./config/db')
const { UserRoutes } = require('./Routes/Users.routes')

const app = express()
app.use(express.json())

app.use('/users', UserRoutes)

app.listen('8080', async () => {
    try {
        await connection
        console.log('DB is connected')
    } catch (err) {
        console.log('DB is not connected')
    }
    console.log('Port connect with 8080')
})