/* 路由模块 */
const service = require('./service.js');
const express = require('express');
const route = express.Router();


//路由处理
//渲染主页
route.get('/',service.showIndex);

//添加页面
route.get('/toAddBook',service.addService);
//添加业务逻辑
route.post('/addBook',service.addData);
//获取单个逻辑
route.get('/toEditBook',service.getOneData);
//修改
route.post('/updataBook',service.getUpdataBook);
//删除
route.get('/removeBook',service.removeBook);

module.exports = route;