import { useDispatch, useSelector } from 'react-redux'
import { MdClear } from 'react-icons/md'

import s from './SelectCurrency.module.scss'
import { setResult } from '../../store/rate'
import { selectCurrencies } from '../../store/selectors'
const SelectCurrency = ({ reducer, value }) => {
  const dispatch = useDispatch()
  const currency = useSelector(selectCurrencies)

  const handleInput = (e) => {
    const curCode = e.target.value.split(' ')[0]
    dispatch(reducer(curCode))
  }

  const onClear = () => {
    dispatch(reducer(''))
    dispatch(setResult(''))
  }

  return (
    <fieldset className={s.fieldset}>
      {value && <MdClear className={s.clear} onClick={onClear} />}
      <legend>Выберите валюту</legend>
      <input
        className={s.input}
        list="country"
        value={value}
        onChange={handleInput}
      />
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
