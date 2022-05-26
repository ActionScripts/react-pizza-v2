import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/filterSlice'
import testReducer from './slices/testSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, test: testReducer },
})
