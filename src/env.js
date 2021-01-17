let baseURL;
//process.env获取当前nodejs进程里的环境变量，这些变量会被写到nodejs.这个项目在nodejs服务器下运行的，所以可以取到nodejs环境变量的参数信息
//CORS跨域和jsonp跨域采用下面的方式。开发，测试，线上
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL='http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL='http://test-mall-pre.springboot.cn/api'
        break;
    case 'prev':
        baseURL='http://prev-mall-pre.springboot.cn/api'
        break;
    case 'prod':
        //线上
        baseURL='http://prod-mall-pre.springboot.cn/api'
        break;
    default:
        baseURL='http://prod-mall-pre.springboot.cn/api'
        break;
}
export default{
    baseURL
}