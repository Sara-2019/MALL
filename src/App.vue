<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    // 第一种mock方式:本地加载请求静态json文件的形式（文件在public文件夹下）
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    //第二种mock方式:通过easy-mock平台实现数据mock，/src/main.js加上“axios.defaults.baseURL = 平台创建的项目地址”;（easy-mock平台多人访问，很卡）
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });
    //第三种mock方式:本地集成mockjs，/src/mock/api.js
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
