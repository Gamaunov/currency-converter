import { configureStore } from '@reduxjs/toolkit'
import converter from './converterSlice'
import currency from './currencySlice'

export default configureStore({
  reducer: {
    converter,
    currency
  }
})
