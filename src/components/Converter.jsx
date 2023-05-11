import { useEffect } from 'react'
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

  useEffect(() => {
    const getCurrency = () => {
      if (from && to) {
        console.log('+')
        dispatch(fetchCurrency({ from, to }))
      }
    }
    getCurrency()
  }, [from, to, amount])

  return (
    <div className="converter">
      <div>
        <h4>У меня есть</h4>
        <InputAmount />
        <SelectCountry
          label="Выберете валюту"
          value={from}
          reducer={setFromValue}
        />
      </div>
      <SwitchCurrency />
      <div>
        <h4>Хочу приобрести</h4>
        <SelectCountry
          label="Выберете валюту"
          value={to}
          reducer={setToValue}
        />
        {amount !== '' ? <div>{amount * result} </div> : <div> {result} </div>}
      </div>
    </div>
  )
}

export default Converter
