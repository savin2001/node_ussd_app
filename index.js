const express = require('express')
const bodyParser = require('body-parser')
const  mongoose = require('mongoose')
const app = express()
const PORT = 8000

// Mongoose & MongoDB  connection
const databaseUrl = 'mongodb://localhost:27017/ussd'
mongoose.connect(databaseUrl)
const db = mongoose.connection

db.on('error', (err)=> {
    console.log(err)
})

db.once('open', ()=> {
    console.log("Database running")
})


// Body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))