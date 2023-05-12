import { createSlice } from '@reduxjs/toolkit'
import { currencyList } from '../../utils/currencyList'

const initialState = {
  currencies: currencyList,
  from: 'RUB',
  to: 'USD',
  amount: ''
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

export const selectCurrencies = (state) => state.currency.currencies
export const selectAmount = (state) => state.currency.amount
export const selectFrom = (state) => state.currency.from
export const selectTo = (state) => state.currency.to

export default currencySlice.reducer
