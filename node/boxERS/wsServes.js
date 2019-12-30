const app = require('http').createServer();
const io = require('socket.io')(app);

const PORT = 3000;
//客户端计数
let clientCount = 0;
//存储客户端socketMap
let socketMap = {};

app.listen(PORT);

//公共调用方法
let proGameURI = function (action,socket) {
    socket.on(action,function (data) {
        //将接收到的消息发送给第二个玩家
        if (socket.clientNum % 2 == 0) {
            socketMap[socket.clientNum - 1].emit(action,data);
        }else{
            socketMap[socket.clientNum + 1].emit(action,data);
        }
    })
}

io.on('connection',function (socket) {

    //客户端进入(两两配对)
    clientCount++;
    socket.clientNum = clientCount;
    socketMap[clientCount]=socket;

    //判断是否是第一个进入的，奇偶判断  配对
    if (clientCount % 2 == 1) {
        //发送消息  第一个进入，就等待配对
        socket.emit('waiting','waiting for another person');
    }else{
        //第二个人已经进入房间，可以开始游戏
        socket.emit('start');   //开始游戏
        socketMap[(clientCount - 1)].emit('start');
    }

    proGameURI('init',socket);//初始化游戏界面
    
    proGameURI('next',socket);//初始化下一个方块

    proGameURI('rotate',socket);//旋转

    proGameURI('right',socket);//右

    proGameURI('down',socket);//下

    proGameURI('left',socket);//左

    proGameURI('falls',socket);//落下

    proGameURI('fixed',socket);//固定

    proGameURI('line',socket);//消行

    proGameURI('setTime',socket);//传递时间

    proGameURI('lost',socket);//输赢判定

    proGameURI('addLine',socket);//输赢判定

    proGameURI('addButtonLine',socket);//输赢判定

    socket.on('disconnect',function () {
        if (socket.clientNum % 2 == 0) {
            if ( socketMap[socket.clientNum - 1]) {
                socketMap[socket.clientNum - 1].emit('leave');
            }
        }else{
            if (socketMap[socket.clientNum + 1]) {
                socketMap[socket.clientNum + 1].emit('leave');
            }
        }
        delete(socketMap[socket.clientNum]);
    })
})

console.log('webSorket Listent to PORT'+PORT)