import axios from 'axios'

const api = axios.create({ baseURL: "https://api.thevirustracker.com" })

export default api