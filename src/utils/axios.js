// vue 插件
const VueAxios = {
  install (Vue, instance) {
    // 只安装一次
    if (this.installed) {
      return
    }

    this.installed = true

    if (!instance) {
      console.error('You have to install axios')
      return
    }

    Vue.axios = instance

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get () {
          return instance
        }
      },
      $http: {
        get: function get () {
          return instance
        }
      }
    })
  }
}

export {
  VueAxios
}