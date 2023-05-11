import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrency } from '../redux/converterSlice'
import { setFromValue, setToValue } from '../redux/currencySlice'
import InputAmount from './InputAmount'
import SelectCountry from './SelectCountry'
import SwitchCurrency from './SwitchCurrency'

const Converter = () => {
  const dispatch = useDispatch()
  const from = useSelector((state) => state.currency.from)
  const to = useSelector((state) => state.currency.to)
  const result = useSelector((state) => state.converter.result)
  const amount = useSelector((state) => state.currency.amount)

  const getCurrency = () => {
    if (from && to) {
      dispatch(fetchCurrency({ from, to }))
    }
  }
  console.log(result)

  return (
    <div className="converter">
      <InputAmount />
      <SelectCountry action={setFromValue} />
      <SwitchCurrency />
      <SelectCountry action={setToValue} />
      <button onClick={getCurrency}>click</button>
      <div>{amount * result} </div>
    </div>
  )
}

export default Converter
