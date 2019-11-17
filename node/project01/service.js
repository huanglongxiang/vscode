/* 业务实现 */
const path = require('path');
const fs = require('fs');
const data = require('./data.json');

//主页显示
exports.showIndex = (req,res)=>{
    res.render('index',{list : data});
}
//添加页面
exports.addService = (req,res)=>{
    res.render('addService');
}
//添加方法
exports.addData =(req,res)=>{
    let formdata = {};
    //参数获取
    for (const key in req.body) {
        formdata[key] = req.body[key];
    }
    formdata.id = (getIndex() + 1).toString();
    data.push(formdata);
    writeFile(res);
}
//获取单条信息
exports.getOneData = (req,res)=>{
    // 参数获取
    let id = req.query.id;
    let book = {};
    data.forEach((item)=>{
        if(id == item.id){
            book = item;
        }
    })
    res.render('updataService',book)
}
//修改信息
exports.getUpdataBook = (req,res)=>{
    let newbook = req.body;
   data.forEach((item)=>{
       if (newbook.id === item.id) {
           for (const key in item) {
              item[key] =  newbook[key];
           }
       }
   })
   writeFile(res);
}
//删除信息
exports.removeBook = (req,res)=>{
    let id = req.query.id;
    console.log(data);
    data.forEach((item) =>{
        if (id === item.id) {
            data.splice(item.id - 1);
        }
    })
    writeFile(res);
}

//---------------工具包--------------
//获得最大值
let getIndex = ()=>{
    let arr = [];
    data.forEach((item)=>{
        arr.push(item.id);
    })
    return Math.max.apply(null,arr);
}
// 写入文件
let writeFile = (err)=>{
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(errs)=>{
        if(errs) return err.send('写入失败');
        return err.redirect('/');
    })
}


