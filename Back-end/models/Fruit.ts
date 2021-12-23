import { Schema } from "mongoose"

const mongoose = require('mongoose')

interface FruitProps {
    genus: string;
    name: string;
    id: number;
    stock: number;
}

const fruitsSchema = new Schema<FruitProps>({
    genus: String,
    name: String,
    id: Number,
    stock: {type: Number, default: 0},
})

module.exports = mongoose.model('Fruit', fruitsSchema)