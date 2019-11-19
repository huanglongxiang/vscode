const mysql = require('mysql');

//公开链接方法
exports.db = (sql,data,callback)=>{
    //创建数据库链接
    let connection =mysql.createConnection({
        host:'localhost',//数据库所在的服务器
        user:'root',//用户名
        password:'123456',//密码
        database:'bookdb'//数据库名
    })
    //执行链接操作
    connection.connect();
    //操作数据库
    connection.query(sql,data,(err,content)=>{
        if (err) {
            console.log('操作失败，请联系管理员。');
            return;
        }
        callback(content);
    })
    //关闭数据库
    connection.end();
}
