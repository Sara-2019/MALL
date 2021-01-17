import Mock from 'mockjs'//导入mock插件库
//实现本地集成mockjs
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
});