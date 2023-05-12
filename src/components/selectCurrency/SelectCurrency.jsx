import { useDispatch, useSelector } from 'react-redux'
import s from './SelectCurrency.module.scss'

const SelectCurrency = ({ reducer, value }) => {
  const dispatch = useDispatch()
  const currency = useSelector((state) => state.currency.currencies)

  const handleInput = (e) => {
    const curCode = e.target.value.split(' ')[0]
    dispatch(reducer(curCode))
  }

  return (
    <fieldset className={s.fieldset}>
      <legend>Выберите валюту</legend>
      <input className={s.input} list="country" value={value} onChange={handleInput} />
      <datalist id="country">
        {currency.map((currency) => (
          <option
            key={currency.value}
            value={`${currency.value} : ${currency.label}`}
          />
        ))}
      </datalist>
    </fieldset>
  )
}

export default SelectCurrency
