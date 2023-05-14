import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Converter.module.scss'
import { isThisNumber } from '../../../utils/isNumber'
import { currencyList } from '../../../utils/currencyList'
import InputAmount from '../inputAmount/InputAmount.jsx'
import SelectCurrency from '../selectCurrency/SelectCurrency.jsx'
import SwitchCurrency from '../switchCurrency/SwitchCurrency.jsx'
import Loader from '../loader/Loader'
import { getRate, setFromValue, setStatus, setToValue } from '../../store/rate'
import { PENDING, SUCCEEDED } from '../../store/constants'
import {
  selectAmount,
  selectFrom,
  selectResult,
  selectStatus,
  selectTo
} from '../../store/selectors'

const Converter = () => {
  const dispatch = useDispatch()
  const from = useSelector(selectFrom)
  const to = useSelector(selectTo)
  const result = useSelector(selectResult)
  const amount = useSelector(selectAmount)
  const status = useSelector(selectStatus)

  useEffect(() => {
    const getCurrency = () => {
      if (from && to) {
        dispatch(setStatus(PENDING))
        dispatch(getRate())
      }
    }
    getCurrency()
  }, [from, to])

  const loader = status === PENDING ? <Loader /> : null

  const curResult = isThisNumber(result) ? result * amount : 0
  const rate = isThisNumber(result) ? result : ''
  const output = from && rate && `${from} стоит ${rate}${to}`
  const fullNameFrom = currencyList.filter((item) => item.value === from)[0]
    ?.label
  const fullNameTo = currencyList.filter((item) => item.value === to)[0]?.label
  return (
    <div className={s.converter}>
      <div className={s.card}>
        {loader}
        <div className={s.titleInner}>
          <h4 className={s.cardTitle}>У меня есть</h4>
          <h6 className={s.subtitle}>{fullNameFrom}</h6>
        </div>
        <SelectCurrency value={from} reducer={setFromValue} />
        <InputAmount />
      </div>
      <span>
        <SwitchCurrency />
      </span>
      <div className={s.card}>
        {loader}
        <div className={s.titleInner}>
          <h4 className={s.cardTitle}>Хочу приобрести</h4>
          <h6 className={s.subtitle}>{fullNameTo}</h6>
        </div>
        <SelectCurrency value={to} reducer={setToValue} />
        {amount === '' ? (
          <div className={s.output}>{status === SUCCEEDED && output}</div>
        ) : (
          <div className={s.output}>
            <span className={s.result}>
              {status === SUCCEEDED && curResult}
            </span>
            {to}
          </div>
        )}
      </div>
    </div>
  )
}

export default Converter
