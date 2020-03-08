const express = require('express')
const app = express()
const router = require('./config/routes')
const port = 4709
const setUpDB = require('./config/database')

setUpDB()
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('listening to port', port)
})