import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/filterSlice'
import styles from './Pagination.module.scss'

const Pagination = () => {
  const currentPage = useSelector((state) => state.filter.currentPage)
  const dispatch = useDispatch()

  const onChangePage = (page) => {
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
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
