import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'
const mock=true;//设置开关，等接口开发完，联调的时候就不需要mock了，那时要关掉mock
if(mock){
  //import 是预编译加载，也就是预编译的时候文件就会被加载，写入内存中；require是从上到下执行到时候才会被加载
  require('./mock/api');
}
// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;  
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});

// Vue.use(VueAxios,axios);//不推荐使用VueAxios实现挂载
Vue.prototype.axios=axios;//原型挂载
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
