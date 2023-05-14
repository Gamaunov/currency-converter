import { createAction, createSlice } from '@reduxjs/toolkit'
import { put, call, select } from 'redux-saga/effects'
import { currencyList } from '../../utils/currencyList'
import { getResult } from '../api'
import { FAILED, PENDING, SUCCEEDED } from './constants'
import { selectFrom, selectTo } from './selectors'

const initialState = {
  status: PENDING,
  result: null,
  from: 'RUB',
  to: 'USD',
  amount: '',
  currencies: currencyList
}

export function* getRateSaga() {
  try {
    const from = yield select(selectFrom)
    const to = yield select(selectTo)
    const payload = yield call(getResult, { from, to })
    yield put(setResult(payload))
  } catch (e) {
    console.log(e)
    setStatus(FAILED)
  }
}

const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload
      state.status = SUCCEEDED
    },
    setFromValue: (state, action) => {
      state.from = action.payload
    },
    setToValue: (state, action) => {
      state.to = action.payload
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    }
  }
})

export const GET_RATE = 'rate/getRate'
export const getRate = createAction(GET_RATE)

export const { setResult, setFromValue, setToValue, setAmount, setStatus } =
  rateSlice.actions

export default rateSlice.reducer
