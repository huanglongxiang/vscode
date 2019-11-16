/* 路由模块 */
const service = require('./service.js');
const express = require('express');
const route = express.Router();


//路由处理
//渲染主页
route.get('/',service.showIndex);

module.exports = route;