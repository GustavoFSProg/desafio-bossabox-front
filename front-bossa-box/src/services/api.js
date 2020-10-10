import axios from 'axios'

const api = axios.create({
 
  baseURL: ' https://desafio-bossabox-api.herokuapp.com/',
  // baseURL: 'http://localhost:3001',
})

export default api
