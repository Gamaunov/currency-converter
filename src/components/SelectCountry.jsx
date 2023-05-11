import { useDispatch, useSelector } from 'react-redux'

const SelectCountry = ({ reducer, value, label }) => {
  const dispatch = useDispatch()
  const country = useSelector((state) => state.currency.currencies)

  const handleInput = (e) => {
    const curCode = e.target.value.split(' ')[0]
    dispatch(reducer(curCode))
  }

  return (
    <>
      <label htmlFor="country"> {label} </label>
      <input type="text" list="country" value={value} onChange={handleInput} />
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
