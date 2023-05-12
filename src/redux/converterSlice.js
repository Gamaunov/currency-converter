import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const PENDING = 'PENDING'
export const SUCCEEDED = 'SUCCEEDED'
export const FAILED = 'FAILED'

const initialState = {
  result: null,
  status: PENDING
}
const API_KEY = import.meta.env.VITE_API_KEY

export const fetchCurrency = createAsyncThunk(
  'converter/fetchCurrency',
  async (params) => {
    const { from, to } = params

    const { data } = await axios.get(
      `https://api.freecurrencyapi.com/v1/latest`,
      {
        params: {
          apikey: API_KEY,
          base_currency: from,
          currencies: to
        }
      }
    )
    return Number(Object.values(data.data))
  }
)

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.status = PENDING
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.result = action.payload
        state.status = SUCCEEDED
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.result = action.payload
        state.status = FAILED
      })
  }
})

export default converterSlice.reducer
