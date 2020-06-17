import axios from 'axios'

const api_route = process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://apicoviddashboard.herokuapp.com'
const api = axios.create({ baseURL: api_route })

export default api