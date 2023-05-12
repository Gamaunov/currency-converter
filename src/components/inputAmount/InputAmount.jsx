import { debounce } from 'debounce'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './InputAmount.module.scss'
import {
  setAmount,
  setFromValue,
  setToValue
} from '../../redux/currencySlice.js'

const InputAmount = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleRequest = useCallback(
    debounce((amount) => {
      dispatch(setAmount(amount))
    }, 1000),
    []
  )

  const handleInput = (e) => {
    setValue(e.target.value)
    const spellCheck = e.target.value
    handleRequest(e.target.value)
  }

  return (
    <fieldset className={s.fieldset}>
      <legend className={s.legend}>Выберите сумму</legend>
      <input
        className={s.input}
        type="number"
        onChange={handleInput}
        value={value}
      />
    </fieldset>
  )
}

export default InputAmount
