const http = require('http');
const fs = require('fs')

http.createServer(function(require,response){
    console.log('request come',require.url);
    //readFileSync该方法用于读取HTML页面,基于fs模块
    const html = fs.readFileSync('test.html','utf-8');
    response.writeHead(200,{
        'Content-Type':'text/html'
    })
    response.end(html);
}).listen(8888);
