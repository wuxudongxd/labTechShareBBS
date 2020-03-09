import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://bj1-ali.ruixuncloud.com:57845',
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
