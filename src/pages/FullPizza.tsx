import { useState, useEffect, FC } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{ imageUrl: string; title: string; price: number }>()
  const navigate = useNavigate()
  const { id } = useParams()

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
      <img className='pizza-block__image' src={pizza.imageUrl} alt='' />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to='/'>
        <button className='button button--outline button--add'>Назад</button>
      </Link>
    </div>
  )
}

export default FullPizza
