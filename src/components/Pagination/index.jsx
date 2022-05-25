import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ onClickPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(event) => onClickPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
