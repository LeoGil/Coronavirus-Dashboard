import axios from 'axios'

const api = axios.create({ baseURL: "https://apicoviddashboard.herokuapp.com" })

export default api