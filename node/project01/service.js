/* 业务实现 */
const path = require('path');
const fs = require('fs');
const data = require('./data.json');

//主页显示
exports.showIndex = (req,res)=>{
    res.render('index',{list : data});
}
//---------------工具包--------------
