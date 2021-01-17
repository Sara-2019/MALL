<template>
    <div>home
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    export default{
        name:'nav-home',//最终加载组件时应用的值，也是页面名称
        components:{//加载多个组件
            NavHeader,//key,value一样的时候简写(ES6语法)
            NavFooter
        }
            
    }
</script>