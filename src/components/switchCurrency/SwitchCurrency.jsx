import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineSwitchHorizontal } from 'react-icons/all'

import s from './SwitchCurrency.module.scss'
import { setFromValue, setToValue } from '../../redux/currencySlice.js'
import { useState } from 'react'

const SwitchCurrency = () => {
  const dispatch = useDispatch()
  const from = useSelector((state) => state.currency.from)
  const to = useSelector((state) => state.currency.to)
  const [toggle, setToggle] = useState(false)
  const handleSwitch = () => {
    dispatch(setToValue(from))
    dispatch(setFromValue(to))
    setToggle(current => !current)
  }
  return (
    <button className={s.switch} onClick={handleSwitch}>
      <HiOutlineSwitchHorizontal
        className={toggle ? s.active : ''} 
      />
    </button>
  )
}

export default SwitchCurrency
