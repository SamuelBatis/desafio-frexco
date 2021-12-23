import { useEffect, useState } from "react"
import { api } from "../../services/api"
import './products.module.scss'

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


export default function Products() {


        const [stock, setStock] = useState(0)

        const incStock = (id: Number) => {
          setStock(stock + 1)
        }
      
        const subStock = (id: Number) => {
          if (stock > 0) {
            setStock(stock - 1)
          } else return
        }
      
        const [fruits, setFruits] = useState<FruitsProps[]>([])
      
        useEffect(() => {
          api.get('all')
            .then(response => {
              setFruits(response.data)
            })
            .catch(error => console.log(error))
        }, [])
      
        return (
          <div className="App">
            <h1>Products</h1>
            <div >
          
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
                    </li>
                  )
                })}</li>
              </ul>
            </div>
          </div>
        );
}