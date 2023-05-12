import { useDispatch, useSelector } from 'react-redux'
import { setFromValue, setToValue } from '../redux/currencySlice'

const SwitchCurrency = () => {
  const dispatch = useDispatch()
  const from = useSelector((state) => state.currency.from)
  const to = useSelector((state) => state.currency.to)

  const handleSwitch = () => {
    dispatch(setToValue(from))
    dispatch(setFromValue(to))
  }
  return <button onClick={handleSwitch}>SwitchCurrency</button>
}

export default SwitchCurrency
