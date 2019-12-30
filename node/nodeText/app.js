const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const a = 123;
    res.send('Hello word');
});
app.listen('3000',()=>console.log('程序运行在3000端口了！'))