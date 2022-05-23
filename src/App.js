import { useEffect, useState } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'

import './scss/app.scss'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://628ba2c37886bbbb37bc9a31.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setItems(res)
      })
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {items.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
