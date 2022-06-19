import { FC, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'
import { RootState } from '../redux/store'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories: FC = memo(() => {
  const categoryId = useSelector((state: RootState) => state.filter.categoryId)
  const dispatch = useDispatch()

  const onClickCategory = useCallback(
    (index: number) => {
      dispatch(setCategoryId(index))
    },
    [dispatch]
  )

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
})

export default Categories
