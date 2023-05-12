import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineSwitchHorizontal } from 'react-icons/all'

import s from './SwitchCurrency.module.scss'
import { setFromValue, setToValue } from '../../redux/currencySlice.js'

const SwitchCurrency = () => {
  const dispatch = useDispatch()
  const from = useSelector((state) => state.currency.from)
  const to = useSelector((state) => state.currency.to)

  const handleSwitch = () => {
    dispatch(setToValue(from))
    dispatch(setFromValue(to))
  }
  return (
    <button className={s.switch} onClick={handleSwitch}>
      <HiOutlineSwitchHorizontal />
    </button>
  )
}

export default SwitchCurrency
