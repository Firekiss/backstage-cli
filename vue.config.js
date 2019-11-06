const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 3000
  },
  css: {
    extract: true,
    loaderOptions: {
      scss: {
        // 注入全局scss
        prependData: `@import "style/common/index.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('style', resolve('src/style'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
  }
}
