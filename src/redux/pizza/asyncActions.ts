import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Pizza, SearchPizzaParams } from './types'

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { category, search, sortBy, order, currentPage } = params
    const { data } = await axios.get<Pizza[]>(
      `https://628ba2c37886bbbb37bc9a31.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )

    return data
  }
)
