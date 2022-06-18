import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories: FC = () => {
  // @ts-ignore
  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispatch = useDispatch()

  const onClickCategory = (index: number) => {
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
