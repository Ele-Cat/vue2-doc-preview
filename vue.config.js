const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // 用来在gitee page中配置多项目，无视即可
  publicPath: "./",
  devServer: {
    port: 9527,
    open: true,
  }
})
