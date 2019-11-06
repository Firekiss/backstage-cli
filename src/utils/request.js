import Vue from 'vue'
import axios from 'axios'
import notification from 'ant-design-vue/es/notification'
import config from '@/configs/defaultSettings'
import { VueAxios } from './axios'

const service = axios.create({
  baseURL: config.BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 错误处理函数
const err = (error) => {
  
}

service.interceptors.request.use(config => {
  return config
}, err)

service.interceptors.response.use(response => {
  return response.data
}, err)

const installer = {
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}