/**
 * 数据的初始化
 */

import Vue from 'vue'
import {
  DEF_OPEN_KEYS,
  DEF_SELECTED_KEYS,
  SET_DEF_OPEN_KEYS,
  SET_DEF_SELECTED_KEYS,
} from '@/store/constant/types'
import store from '@/store/'

export default function initializer () {
  store.commit(SET_DEF_OPEN_KEYS, Vue.ls.get(DEF_OPEN_KEYS))
  store.commit(SET_DEF_SELECTED_KEYS, Vue.ls.get(DEF_SELECTED_KEYS))
}
