import axios from 'axios'
import context from "../main"
var baseURL='http://116.63.172.108:8010'//'http://47.107.172.119/'
export function request(config,timeout1=10000) {
  
  const instance = axios.create({
    baseURL: baseURL,//'http://47.107.172.119:8000/',
    timeout: timeout1
  })

  instance.interceptors.request.use(config => {
      return config
    }, err => {
      console.log("REQUEST_ERR");
      console.log(err);
      return err
    }
  ),

  instance.interceptors.response.use(config => {
      return config
    }, err => {
      console.log("RESPONSE_ERR");
      console.log(err.response);
      return err.response
    }
  )

  return instance(config)
}
//带有token验证的request
export function request_auth_required(config,timeout1=10000) {
  config.headers={}
  if(context.hasLoginData()){
    config.headers.Authorization="cuit "+context.$store.state.userinfo.token;
  }else{
    config.headers.Authorization="cuit ";
  }
  
  const instance = axios.create({
    baseURL: baseURL,
    timeout: timeout1
  })

  instance.interceptors.request.use(config => {
      return config
    }, err => {
      console.log("REQUEST_ERR");
      console.log(err);
      return err
    }
  ),

  instance.interceptors.response.use(config => {
      return config
    }, err => {
      console.log("RESPONSE_ERR");
      console.log(err.response);
      return err.response
    }
  )

  return instance(config)
}