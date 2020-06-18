import axios from 'axios'

// const api = axios.create
const api_timeline_global = axios.create({ baseURL: "https://disease.sh/v2/" })

const api = axios.create({ baseURL: "https://api.thevirustracker.com" })

export { api, api_timeline_global }