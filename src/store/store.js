import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { configureStore } from '@reduxjs/toolkit'
import rate, { getRateSaga, GET_RATE } from './rate'

const sagaMiddleware = createSagaMiddleware()
function* sagas() {
  yield takeEvery(GET_RATE, getRateSaga)
}
export const store = configureStore({
  reducer: {
    rate
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)
