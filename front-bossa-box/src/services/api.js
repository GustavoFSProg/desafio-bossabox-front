import axios from 'axios'

const api = axios.create({
  // baseURL: ' https://desafio-bossabox-api.herokuapp.com/',
  baseURL: 'http://localhost:3000',
})

axios.interceptors.request.use(
  (config) => {
    return { ...config, headers: { 'Content-Type': 'application/json' } }
  },

  (error) => {
    const { status } = error.response

    if (status === 401) {
    }
    return Promise.reject(error)
  }
)
export default api
