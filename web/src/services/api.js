import axios from 'axios';

const apiRoute =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'https://apicoviddashboard.herokuapp.com';
const api = axios.create({ baseURL: apiRoute });

export default api;
