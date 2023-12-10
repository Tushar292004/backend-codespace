require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000 

app.get('/', (req, res) => {
    res.send('Hello Nisha')
})

app.get('/twitter', (req, res) => {
    res.send("Tushar's Besti Nisha")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please Login In My Heart</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})