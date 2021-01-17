/**
 * webpack配置表，webpack加载vue.config.js,最终会传送给nodejs服务器来实现服务的设置
 * 模块遵循commonjs规范,module.exports导入一个模块，不能用import
 * host:主机
 * proxy：代理。拦截到'/api'时代理到target
 * changeOrigin：是否将主机源点更改为目标url地址
 * pathRewrite：把/api置为空，把传进来的地址（如/activity/serviecetime）拼接在target后面，这样就拼接成了http://localhost:8080/activity/serviecetime
 * 部署的时候没有这个文件
 */
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://www.imooc.com',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}