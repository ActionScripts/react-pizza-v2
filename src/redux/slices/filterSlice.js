import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setSortType: (state, action) => {
      state.sort = action.payload
    },
    setFilters: (state, action) => {
      state.currentPage = Number(action.payload.currentPage)
      state.categoryId = Number(action.payload.categoryId)
      state.sort = action.payload.sort
    },
  },
})

export const selectFilter = (state) => state.filter
export const selectSort = (state) => state.filter.sort

export const { setSearchValue, setCategoryId, setCurrentPage, setSortType, setFilters } =
  filterSlice.actions

export default filterSlice.reducer
