import React, { useEffect, useState } from "react"
import { api } from '../../services/api'
import 'stock.scss'

interface FruitsProps {
    genus: String;
    name: String;
    id: Number;
    family: String;
    order: String;
    nutritions: {
        carbohydrates: Number;
        protein: Number;
        fat: Number;
        calories: Number;
        sugar: Number
    }
}

export function Stock() {

    const [fruits, setFruits] = useState<FruitsProps[]>([])

    useEffect(() => {
        api.get('all')
            .then(response => {
                setFruits(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="container">
            <h1>Stock</h1>
            <div className="add">
                
            </div>
            <ul>
                <li className='mainList'>{fruits.map((fruity) => {
                    return (
                        <li className='Fruit'>
                            <h3>{fruity.name}</h3> <br />

                            <ul>
                                <li>Calories: <span>{fruity.nutritions.calories}</span></li>
                                <li>carbohydrates: <span>{fruity.nutritions.carbohydrates}</span></li>
                                <li>fat: <span>{fruity.nutritions.fat}</span></li>
                                <li>protein: <span>{fruity.nutritions.protein}</span></li>
                                <li>sugar: <span>{fruity.nutritions.sugar}</span></li>
                            </ul>
                           <span>Amount on the stock: 0</span>
                        </li>
                    )
                })}</li>
            </ul>
        </div>
    )
}