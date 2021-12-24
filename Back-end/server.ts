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

//retornar frutas

app.get('/all', (req, res) => {
    return res.json(data)
})

//retornar uma fruta
app.get('/all/:index', (req, res) => {
    const { index } = req.params;

    return res.json(data[index])
})

// criar nova fruta

app.post('/all', (req, res) => {
    const fruit = req.body;

    data.push(fruit)
    return res.json(data)
   
})

interface fruitsSchema {
    genus: string;
    name: string;
    id: number;
    stock: number;
}

// atualizar fruta
app.put('/all/:index', (req, res) => {
    const { index } = req.params;
    const { name }: fruitsSchema = req.body;

    data[index] = name

    return res.json(data);
})

// Deletar fruta
app.delete('/all/:index', (req, res) => {
    const { index } = req.params;


    data.splice(index, 1);
    return res.json({message: "Fruta deletada"})
})

app.listen('3333', () => {
    console.log('Server running')
}) 