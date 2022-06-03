const express = require('express')
const bodyParser = require('body-parser')
const  mongoose = require('mongoose')
const app = express()
const PORT = 8000







app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))