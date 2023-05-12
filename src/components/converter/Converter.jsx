import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Converter.module.scss'
import { fetchCurrency, PENDING } from '../../redux/converterSlice.js'
import { setFromValue, setToValue } from '../../redux/currencySlice.js'
import InputAmount from '../inputAmount/InputAmount.jsx'
import SelectCurrency from '../selectCurrency/SelectCurrency.jsx'
import SwitchCurrency from '../switchCurrency/SwitchCurrency.jsx'
import { isThisNumber } from '../../../utils/isNumber'
import { currencyList } from '../../../utils/currencyList'
import Loader from '../loader/Loader'

const Converter = () => {
  const dispatch = useDispatch()
  const from = useSelector((state) => state.currency.from)
  const to = useSelector((state) => state.currency.to)
  const result = useSelector((state) => state.converter.result)
  const amount = useSelector((state) => state.currency.amount)
  const status = useSelector((state) => state.converter.status)

  useEffect(() => {
    const getCurrency = () => {
      if (from && to) {
        console.log('+')
        dispatch(fetchCurrency({ from, to }))
      }
    }
    getCurrency()
  }, [from, to, amount])

  const loader = status === PENDING ? <Loader className={s.loader} /> : null

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
          <div className={s.output}>{output}</div>
        ) : (
          <div className={s.output}>
            <span className={s.result}>{curResult}</span>
            {to}
          </div>
        )}
      </div>
    </div>
  )
}

export default Converter
