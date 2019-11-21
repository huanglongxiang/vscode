const mysql = require ('mysql');

let handerdb=(sql,data,callback)=>{
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'bookdb'
    });
    connection.connect();
    connection.query(sql,data,(err,DBbase)=>{
        if(err) {
            console.log(err+'操作错误,请联系管理员');
            return
        }
        callback(DBbase);
    });
    connection.end();
}

exports.handerdb = handerdb;
