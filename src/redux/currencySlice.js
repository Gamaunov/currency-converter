import { createSlice } from '@reduxjs/toolkit'
import { currencyList } from '../../utils/currencyList'

const initialState = {
  currencies: currencyList,
  from: null,
  to: null,
  amount: 1
}

export const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setFromValue: (state, action) => {
      state.from = action.payload
    },
    setToValue: (state, action) => {
      state.to = action.payload
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    }
  }
})

export const { setFromValue, setToValue, setAmount } = currencySlice.actions

export default currencySlice.reducer
