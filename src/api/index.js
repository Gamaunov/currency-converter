import axios from 'axios'
const API_KEY = import.meta.env.VITE_API_KEY

export const getResult = async (params) => {
  const { from, to } = params
  const { data } = await axios.get(
    `https://api.freecurrencyapi.com/v1/latest`,
    {
      params: {
        apikey: API_KEY,
        base_currency: from,
        currencies: to
      }
    }
  )
  return Number(Object.values(data.data))
}
