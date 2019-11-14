import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/configs/defaultSettings'

// antd 引入
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'

Vue.use(Antd)
// 使用第三方浏览器数据库存储库
Vue.use(VueStorage, config.storageOptions)