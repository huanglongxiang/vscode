const db = require('./db.js')

exports.allbook = (req,res)=>{
    let sql = 'SELECT * FROM list';
    let param = [];
    db.handerdb(sql,param,(data)=>{
        res.json(data);
    })
}
exports.getbookbyid = (req,res)=>{
    let id = req.params.id;
    let sql = 'SELECT * FROM list where id =?';
    let param = [id];
    db.handerdb(sql,param,(data)=>{
        res.json(data[0]);
    })
}
exports.addbook = (req,res)=>{
    let info = req.body;
    delete info['id'];
    console.log(info);
    let sql = 'INSERT INTO list SET ?';
    db.handerdb(sql,info,(data)=>{
        console.log(data);
        if (data.affectedRows == 1) {
            res.json({flag:1});
        } else {
            res.json({flag:2});
        }
    })
}
exports.removebook = (req,res)=>{
    let id = req.params.id
    let sql = 'DELETE FROM list WHERE id = ?';
    let param = [id];
    db.handerdb(sql,param,(data)=>{
        if (data.affectedRows == 1) {
            res.json({flag:1});
        } else {
            res.json({flag:2});
        }
    })
}
exports.updatabook = (req,res)=>{
    let info = req.body;
    let sql = 'UPDATE list SET name=?,author=?,cetagory=?,description=? where id=?';
    let param = [];
    for (const key in info) {
        if (key !='id') {
            param.push(info[key]);
        }
    }
    param.push(info['id']);
    db.handerdb(sql,param,(data)=>{
        if (data.affectedRows == 1) {
            res.json({flag:1});
        } else {
            res.json({flag:2});
        }
    })
}