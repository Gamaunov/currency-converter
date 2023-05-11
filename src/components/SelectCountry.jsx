import { useDispatch, useSelector } from 'react-redux'

const SelectCountry = ({ action }) => {
  const dispatch = useDispatch()
  const country = useSelector((state) => state.currency.currencies)

  const handleInput = (e) => {
    const curCode = e.target.value.split(' ')[0]
    dispatch(action(curCode))
  }

  return (
    <>
      <input type="text" list="country" onChange={handleInput} />
      <datalist id="country">
        {country.map((country) => (
          <option
            key={country.code}
            value={`${country.code} : ${country.country}`}
          />
        ))}
      </datalist>
    </>
  )
}

export default SelectCountry
