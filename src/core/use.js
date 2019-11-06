import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/configs/defaultSettings'

// antd 引入
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'

Vue.use(Antd)
Vue.use(VueStorage, config.storageOptions)