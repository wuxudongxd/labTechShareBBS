import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
      return config
    }, err => {
      return err
    }
  ),

  instance.interceptors.response.use(config => {
      return config
    }, err => {
      return err
    }
  )

  return instance(config)
}
