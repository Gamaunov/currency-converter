import { debounce } from 'debounce'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAmount } from '../redux/currencySlice'

const InputAmount = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handRequest = useCallback(
    debounce((amount) => {
      dispatch(setAmount(amount))
    }, 700),
    []
  )

  const handleInput = (e) => {
    setValue(e.target.value)
    handRequest(e.target.value)
  }

  return <input type="number" onChange={handleInput} value={value} />
}

export default InputAmount
