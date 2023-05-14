import { debounce } from 'debounce'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdClear } from 'react-icons/md'

import s from './InputAmount.module.scss'
import { setAmount } from '../../store/rate'
import { selectAmount } from '../../store/selectors'

const InputAmount = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const amount = useSelector(selectAmount)

  const handleRequest = useCallback(
    debounce((amount) => {
      dispatch(setAmount(amount))
    }, 1000),
    []
  )

  const handleInput = (e) => {
    setValue(e.target.value)
    handleRequest(e.target.value)
  }

  const onClear = () => {
    setValue('')
    dispatch(setAmount(''))
  }

  return (
    <fieldset className={s.fieldset}>
      {amount && <MdClear className={s.clear} onClick={onClear} />}
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
