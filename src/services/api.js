import axios from 'axios'

const api = axios.create({
  baseURL: 'https://devclub-node-2-0.onrender.com',
})

export default api