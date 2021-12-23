const cors = require('cors')
const express = require('express');
const app = express()
const data = require('./data.json')
const mongoose = require('mongoose')

const Fruit = require('./models/Fruit')


mongoose.connect('mongodb://localhost/fruits')

let db = mongoose.connection;

db.on("error", () => { console.log('houve um erro') })
db.once("open", () => { console.log('Banco Carregado') })


app.use(cors())

app.use(express.json())

app.get('/all', (req, res) => {
    return res.json(data)
})

app.post('/all', (req, res) => {
    let fruit = new Fruit({
        
    })
})


app.listen('3333', () => {
    console.log('Server running')
}) 