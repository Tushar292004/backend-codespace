require('dotenv').config() //
const express = require('express')  // variable has all functionalities of Express
const app = express() //Everything i now assigned to the app directly 
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

app.get('/youtube', (req, res) => {
    res.send(`<h2>HELLO WELCOME TO YOUTUBE</h2>`)
})

app.listen(process.env.PORT, () => {  // App is using "listen" method as a callback function 
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

//Everthing above just created a simple server