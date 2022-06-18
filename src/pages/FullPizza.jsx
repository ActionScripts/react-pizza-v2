import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FullPizza = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pizza, setPizza] = useState()

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://628ba2c37886bbbb37bc9a31.mockapi.io/items/${id}`
        )
        setPizza(data)
      } catch (error) {
        alert('Ошибка при получении пиццы')
        navigate('/')
      }
    }
    fetchPizza()
  }, [id, navigate])

  if (!pizza) {
    return <h2 className='container'>Загрузка...</h2>
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='' />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  )
}

export default FullPizza
