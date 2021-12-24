import React, { useEffect, useState } from "react"
import { api } from '../../services/api'
import './stock.module.scss'

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

export default function Stock() {

    const [fruits, setFruits] = useState<FruitsProps[]>([])

    useEffect(() => {
        api.get('all')
            .then(response => {
                setFruits(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    function deleteFruit() {
        api.delete
    }

    return (
        <div className="container">
            <h1 className="header">Stock</h1>
            <div className="add">
                <form action="http://localhost:3333/all" method="POST">
                    <input type="text" name='genus' placeholder="genus"/>
                    <input type="text" name='name' placeholder="name"/>
                    <button>salvar</button>
                </form>
            </div>
            <ul>
                <li className='mainList'>{fruits.map((fruity) => {
                    return (
                        <li className='Fruit'>
                            <h3>{fruity.name}</h3> <br />

                            <ul>
                                <li>genus: <span>{fruity.genus}</span></li>
                                <li>order: <span>{fruity.order}</span></li>
                                <li>family: <span>{fruity.family}</span></li>
                                <button>Delete</button>
                            </ul>
                           <span>Amount on the stock: 0</span>
                        </li>
                    )
                })}</li>
            </ul>
        </div>
    )
}