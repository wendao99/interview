import axios from 'axios'

export function  request(config) {
  const instance = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:4000/',
  })

  instance.interceptors.request.use(config => {
    return config
  })

  instance.interceptors.response.use(res => {
    return res.data
  })

  return instance(config)
}