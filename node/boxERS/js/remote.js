let Remote = function (socket) {
    let game;//声明游戏对象
    
    let bindSideClick = function () {
         //接收对方返回过来的游戏同步数据  游戏初始化界面
        socket.on('init',function (data) {
            start(data.type,data.rotate);
        })
        socket.on('next',function (data) {
            game.preforNext(data.type,data.rotateNext);
        })
        socket.on('rotate',function (data) {
            game.rotate();
        })
        socket.on('right',function (data) {
            game.right();
        })
        socket.on('down',function (data) {
            game.down()
        })
        socket.on('left',function (data) {
            game.left()
        })
        socket.on('falls',function (data) {
            game.falls();
        })
        socket.on('fixed',function (data) {
            game.fixed();
        })
        socket.on('setTime',function (data) {
            game.setTime(data);
        })
        socket.on('lost',function (data) {
            game.gameOver(false);
        })
        socket.on('addButtonLine',function (data) {
            game.addButtonLine(data);
        })
        socket.on('line',function (data) {
            game.clearRow();//消行实现
            game.setScrop(data);//改分
        })
    }
   
    //游戏开始
    let start = (type,dir)=>{
        let dom = {
            gameDiv: document.getElementById('side_game'),
            nextDiv: document.getElementById('side_next'),
            timeDiv: document.getElementById('side_timeDiv'),
            scropDiv: document.getElementById('side_scrop'),
            winDiv: document.getElementById('side_win')
        };
        game = new Game();
        game.init(dom,type,dir);
    }
    bindSideClick();
}