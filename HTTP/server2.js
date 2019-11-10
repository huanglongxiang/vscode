const http = require('http')

http.createServer(function(require,response){
    console.log('request come',require.url)
    response.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
    })
    response.end('123')
}).listen(8887)
console.log('server listing on 8887')