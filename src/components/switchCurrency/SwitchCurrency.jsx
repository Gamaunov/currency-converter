import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineSwitchHorizontal } from 'react-icons/all'
import { useState } from 'react'

import s from './SwitchCurrency.module.scss'
import {
  selectFrom,
  selectTo,
  setFromValue,
  setToValue
} from '../../redux/currencySlice.js'

const SwitchCurrency = () => {
  const dispatch = useDispatch()
  const from = useSelector(selectFrom)
  const to = useSelector(selectTo)
  const [toggle, setToggle] = useState(false)
  const handleSwitch = () => {
    dispatch(setToValue(from))
    dispatch(setFromValue(to))
    setToggle((current) => !current)
  }
  return (
    <button className={s.switch} onClick={handleSwitch}>
      <HiOutlineSwitchHorizontal className={toggle ? s.active : ''} />
    </button>
  )
}

export default SwitchCurrency
