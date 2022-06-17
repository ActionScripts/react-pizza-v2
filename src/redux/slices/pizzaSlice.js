import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { category, search, sortBy, order, currentPage } = params
  const { data } = await axios.get(
    `https://628ba2c37886bbbb37bc9a31.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
  )

  return data
})

const initialState = {
  items: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.items = []
      state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  },
})

export const selectPizza = (state) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
