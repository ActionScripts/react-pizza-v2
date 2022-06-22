import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import { selectCurrentPage } from '../../redux/filter/selectors'
import { setCurrentPage } from '../../redux/filter/slice'
import styles from './Pagination.module.scss'

const Pagination: FC = () => {
  const currentPage = useSelector(selectCurrentPage)
  const dispatch = useDispatch()

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  )
}

export default Pagination
