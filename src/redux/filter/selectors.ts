import { RootState } from '../store'

export const selectCurrentPage = (state: RootState) => state.filter.currentPage
export const selectSort = (state: RootState) => state.filter.sort
export const selectFilter = (state: RootState) => state.filter
