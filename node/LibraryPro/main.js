const express = require('express');
const bodyparse = require('body-parser');
const route = require('./public/route/route');
const app = express();

app.use('www',express.static('public'));
app.use(bodyparse.urlencoded({extended:false}));
app.use(route);

app.listen(3000,()=>{
    console.log('running');
})
