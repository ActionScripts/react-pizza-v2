import { setCategoryId } from '../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispatch = useDispatch()

  const onClickCategory = (index) => {
    dispatch(setCategoryId(index))
  }

  return (
    <div className='categories'>
      <ul>
        {categories.map((name, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? 'active' : ''}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
