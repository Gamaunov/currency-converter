
const InputTo = () => {
  return (
    <div>
      <input type="text" list="country" />
      <datalist id="country">
        <option>Беларусь</option>
        <option>Бельгия</option>
        <option>Болгария</option>
      </datalist>
    </div>
  )
}

export default InputTo
