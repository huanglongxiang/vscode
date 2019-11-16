/* 图书管理系统入口 */
const express = require('express'); //对nodejs底层传输的包装实现
const app = express();
const template = require('art-template');
const path = require('path');
const bodyParse = require('body-parser');
const route = require('./route');//引入路由文件


//静态服务
app.use('/www',express.static('css'));
//加载视图模板页面
app.set('views',path.join(__dirname,'views'));
//加载模板引擎
app.set('view engine','art');
app.engine('art',require('express-art-template'));
//挂载参数处理中间插件
app.use(bodyParse.urlencoded({extended:false}));
//格式化json数据
app.use(bodyParse.json());
//启动服务器
//配置路由
app.use(route);
//启动服务端口
app.listen(3000,()=>{
    console.log('success');
})





 