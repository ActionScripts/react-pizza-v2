import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchContext } from '../App'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/Pagination'

const Home = () => {
  const { categoryId, sort } = useSelector((state) => state.filter)

  const { searchValue } = useContext(SearchContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }
      return false
    })
    .map((item) => <PizzaBlock key={item.id} {...item} />)

  useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'

    fetch(
      `https://628ba2c37886bbbb37bc9a31.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setItems(res)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sort, searchValue, currentPage])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination onClickPage={(num) => setCurrentPage(num)} />
    </div>
  )
}

export default Home
