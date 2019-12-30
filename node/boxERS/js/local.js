let Local = function (socket) {

    let game;//游戏对象
    let INTERVAL = 500;  //间隔时间
    let timer = null;   //定时器
    let timeConute = 0, time = 0;//计数器
    //绑定键盘事件
    let bindKeyEvent = () => {
        //按键事件
        document.onkeydown = function (e) {
            //获取按键值并进行判断
            if (e.keyCode == 38) { //上
                game.rotate();
                socket.emit('rotate');//转发
            } else if (e.keyCode == 39) {//右
                game.right();
                socket.emit('right');//转发
            } else if (e.keyCode == 40) {//下
                game.down();
                socket.emit('down');//转发
            } else if (e.keyCode == 37) {//左
                game.left();
                socket.emit('left');//转发
            } else if (e.keyCode == 32) {//空格
                game.falls();
                socket.emit('falls');//转发
            }
        }
    }
    //生成种类
    let getdiamondsType = () => {
        return Math.ceil(Math.random() * 7) - 1;
    }
    //生成方块方向
    let getdiamondsRotato = () => {
        return Math.ceil(Math.random() * 4) - 1;
    }
    //生成干扰行 lineNum:需要生成的行数
    let generateBottomLine = (lineNum) => {
        let lines = [];//用来存放随机生成的每一行数组
        for (let i = 0; i < lineNum; i++) {
            let _arr = [];
            for (let j = 0; j < 10; j++) {
                _arr.push(Math.ceil(Math.random() * 2) - 1);
            }
            lines.push(_arr);
        }
        return lines;
    }
    //方块下落 相关逻辑
    let move = () => {
        //开始计时
        timeFunc();
        //实现方块下落到底部之后，固定
        if (!game.down()) {
            game.fixed(); //固定当前方块
            socket.emit('fixed');//转发

            let s = game.clearRow();//消行实现

            //有值就消除行
            if (s) {
                game.setScrop(s);//改分
                socket.emit('line',s);//传输
                let addcode =generateBottomLine(s);
                socket.emit('addLine',addcode);
            }
            let flag = game.isStop();// 判断游戏是否结束
            //判断游戏是否结束
            if (flag) {
                stop();
                game.gameOver(false);
                document.getElementById('side_win').innerText = '你赢了'
                socket.emit('lost')
            } else {
                // game.preforNext(getdiamondsType(), getdiamondsRotato());//生成下一个方块  随机种类，随机方向

                let typeNext = getdiamondsType(),rotateNext = getdiamondsRotato();//保存下次随机的数据
                
                socket.emit('next',{type:typeNext,rotateNext:rotateNext});
                
                game.preforNext(typeNext,rotateNext);//生成下一个方块

                
            }
        }else{
            socket.emit('down');//转发
        }

    }
    //计数函数
    let timeFunc = () => {
        timeConute++;
        if (timeConute == 2) {
            timeConute = 0;
            time += 1;
            game.setTime(time);
            socket.emit('setTime',time)
            //测试，生成一行
           /*  if (time%10 == 0) {
                game.addButtonLine(generateBottomLine(1));
            } */
        }
    }


    //开始
    let start = function () {
        //获取dom元素
        let dom = {
            gameDiv: document.getElementById('local_game'),
            nextDiv: document.getElementById('local_next'),
            timeDiv: document.getElementById('local_timeDiv'),
            scropDiv: document.getElementById('local_scrop'),
            winDiv: document.getElementById('local_win')
        };
        game = new Game();
        let type = getdiamondsType(),rotate=getdiamondsRotato();//保存当前方块类别与方向
        
        game.init(dom, type,rotate );//初始化游戏
        
        socket.emit('init',{type:type,rotate:rotate});// 将方块信息发送给终端

        let typeNext = getdiamondsType(),rotateNext = getdiamondsRotato();//保存下次随机的数据
        
        game.preforNext(typeNext,rotateNext);//生成下一个方块

        socket.emit('next',{type:typeNext,rotateNext:rotateNext});

        bindKeyEvent();
        //方块下落
        timer = setInterval(move, INTERVAL);
    }
    //结束
    let stop = function () {
        if (timer) {
            clearInterval(timer);
            document.onkeydown = null;
        }
    }
    //公布方法 导出API
    // this.start = start;
    //当另一个人进入房间时，开始游戏
    socket.on('start',function () {
        //清空
        document.getElementById('waiting').innerText = '';
        //启动游戏；
        start();
    })
    socket.on('lost',function () {
        game.gameOver(true);
        stop()
    })
    socket.on('leave',function () {
        document.getElementById('side_win').innerText = '对方掉线了'
        document.getElementById('local_win').innerText = '断开连接';
        stop();
    })
    socket.on('addLine',function (data) {
        console.log(data);
        game.addButtonLine(data);
       socket.emit('addButtonLine',data);
    })
}