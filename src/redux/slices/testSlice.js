import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setValue: (state) => {
      state.value += 1
    },
  },
})

export const { setValue } = counterSlice.actions
export default counterSlice.reducer
