import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import {
  SET_DEF_OPEN_KEYS,
  SET_DEF_SELECTED_KEYS,
  SET_MENU_COLLAPSED,
  DEF_OPEN_KEYS,
  DEF_SELECTED_KEYS,
} from './constant/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defOpenKeys: [],
    defSelectedKeys: [],
    menuCollapsed: false
  },
  mutations: {
    [SET_DEF_OPEN_KEYS](state, openKeys) {
      state.defOpenKeys = openKeys
      Vue.ls.set(DEF_OPEN_KEYS, openKeys)
    },
    [SET_DEF_SELECTED_KEYS](state, selectedKeys) {
      state.defSelectedKeys = selectedKeys
      Vue.ls.set(DEF_SELECTED_KEYS, selectedKeys)
    },
    [SET_MENU_COLLAPSED](state, isCollapsed) {
      state.menuCollapsed = isCollapsed
    }
  },
  actions: {
  },
  modules: {
    ...modules
  }
})
