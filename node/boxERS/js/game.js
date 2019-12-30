let Game = function () {//游戏对象
    //dom元素
    let gameDiv;
    let nextDiv;
    let TimeDiv;
    let scropDiv;
    let winDiv;
    //游戏矩阵
    //整个游戏画面的方块显示
    let mapData = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    //对需要存储的DIV进行存储 nextDivs正在下落的div ,gameDiv 地图中需要显示的div
    let nextDivs = [], gameDivs = [];
    //当前方块，下一个方块 scorpContent分数
    let curbox ,nextbox,scorpContent=0;
    //检测操作数据是否触碰到边界
    let check = (pos,x,y)=>{
        if (pos.x+x<0)//上边界
            return false;
        else if(pos.x+x>=mapData.length)//下边界
            return false;
        else if (pos.y+y<0) //左边界
            return false;
        else if(pos.y+y>=mapData[0].length) //右边界
            return false;
        else if(mapData[pos.x+x][pos.y+y]==1)
            return false;
        else
            return true;
    }
    //检测数据是否合法
    let isValid = (pos,data)=>{
        for (let i = 0; i < data.length; i++) 
            for (let j = 0; j < data[i].length; j++) 
                //判断方块容器中的格子是否合法，同时判断是否超出边界
               if (data[i][j] != 0 && !check(pos,i,j)) 
                   return false;

        return true;
    }
    //设置数据
    let setData = ()=> {
        for (let i = 0; i < curbox.nextData.length; i++) {
            for (let j = 0; j < curbox.nextData[i].length; j++) {
                if(check(curbox.origin,i,j))
                    //将需要展示的方块，拷贝到地图上
                    mapData[curbox.origin.x+i][curbox.origin.y+j]=curbox.nextData[i][j]
            }
        }
    }
    //清除数据
    let clearData = ()=> {
        for (let i = 0; i < curbox.nextData.length; i++) {
            for (let j = 0; j < curbox.nextData[i].length; j++) {
                if(check(curbox.origin,i,j))
                    //清空之前的数据
                    mapData[curbox.origin.x+i][curbox.origin.y+j]=0
            }
        }
    }    
    //根据二维数组生成DIV DataInfo  矩阵   dom 容器   showDiv 
    let showinit = (DataInfo, dom, showDiv) => {
        //遍历与存储方格元素
        for (let i = 0; i < DataInfo.length; i++) {
            let _Div = [] //临时存储一行中需要改变的方块
            // 遍历行
            for (let j = 0; j < DataInfo[i].length; j++) {
                let div = document.createElement('div');
                div.className = 'none';
                div.style.left = 20 * j + 'px';
                div.style.top = 20 * i + 'px';
                dom.appendChild(div);
                _Div.push(div);//存储地图中每一个方块的信息
            }
            showDiv.push(_Div);//存储到全局变量中
        }

    }
    //初始化数据
    let shawMatrix = (DataInfo, showDiv) =>{
        //渲染页面
        for (let i = 0; i < DataInfo.length; i++) {
            for (let j = 0; j < DataInfo[i].length; j++) {
                switch (DataInfo[i][j]) {
                    case 0:
                        showDiv[i][j].className = 'none';
                        break;
                    case 1:
                        showDiv[i][j].className = 'done';
                        break;
                    case 2:
                        showDiv[i][j].className = 'current';
                        break;
                }
            }
        }
    }
    //初始化  传入需要操作的dom元素
    let init = (dom,type,dir)=>{
        dom.winDiv.innerText = '';
        //拿到需要操作的元素
        gameDiv = dom.gameDiv;
        nextDiv = dom.nextDiv;
        TimeDiv = dom.timeDiv;
        scropDiv = dom.scropDiv;
        winDiv = dom.winDiv;
        //初始化下落方块
        nextbox = SquareFactory.prototype.make(type,dir);

        //渲染
        showinit(mapData,gameDiv,gameDivs);//地图
        showinit(nextbox.nextData,nextDiv,nextDivs);//下落的方块
        shawMatrix(nextbox.nextData,nextDivs);
    }
    /* 操作方法 */
    //下移
    let down = ()=>{
        //将是否合法的判断传入方块类中 判断方块是否可以下降
        if (curbox.canDown(isValid)) {
            clearData();
            curbox.down();
            setData();
            shawMatrix(mapData,gameDivs);
            return true;
        }else{
            return false;
        }
    }
    //左移
    let left = ()=>{
        if (curbox.canLeft(isValid)) {
            clearData();
            curbox.left();
            setData();
            shawMatrix(mapData,gameDivs);
        }
    }
    //右移
    let right = ()=>{
        if (curbox.canRight(isValid)) {
            clearData();
            curbox.right();
            setData();
            shawMatrix(mapData,gameDivs);
        }
    }
    //旋转
    let rotate = ()=>{
        if (curbox.canRotate(isValid)) {
            clearData();
            curbox.rotate();
            setData();
            shawMatrix(mapData,gameDivs);
        }
    }
    //方块移动带哦底部，让其固定住
    let fixed = ()=>{
        for (let i = 0; i < curbox.nextData.length; i++) 
            for (let j = 0; j < curbox.nextData[i].length; j++) 
                if (check(curbox.origin,i,j)) 
                    if (mapData[curbox.origin.x+i][curbox.origin.y+j] == 2) 
                        mapData[curbox.origin.x+i][curbox.origin.y+j] = 1;
        shawMatrix(mapData,gameDivs);
    }
    //方块固定后，将下一个方块渲染到页面上
    let preforNext = (type,dir)=>{
        curbox = nextbox;//将下一个的方块加载给当前方块
        setData();//设置数据
        nextbox = SquareFactory.prototype.make(type,dir);//将下个方块加载到
        shawMatrix(mapData,gameDivs);   //再次渲染（初始化页面）
        shawMatrix(nextbox.nextData,nextDivs);
    }
    //消行逻辑实现
    let clearRow = ()=>{
        let s = 0;//记录消的行数
        //根据地图从下网上遍历
        for (let i = mapData.length-1; i >= 0; i--) {
            //判断当前行是否全部为一
            let flag = true;
            for (let j = 0; j < mapData[i].length; j++) {
                if (mapData[i][j] != 1) {
                    flag = false;
                    break;
                }
            }
            //flag为真，表示所有的值都是1，所以要进行消除
            if (flag) {
                s++;
                for (let m = i; m > 0; m--) {
                    for (let j = 0; j < mapData[m].length; j++) {
                        mapData[m][j] = mapData[m-1][j];
                     }
                }
                //因为消去了一行，所以需要在顶层新生成一行。
                for (let j = 0; j < mapData[0].length; j++) {
                    mapData[0][j] =0;
                 }
                 //通过给i复位，来实现整体向下移动的效果
                i++;
            }
        }
        return s;
    }
    //是否需要停止游戏
    let isStop = ()=>{
        let flag = false;
        for (let i = 0; i < mapData[0].length; i++) {
          if (mapData[1][i] == 1) {
              flag = true;
          }
        }
        return flag;
    }
    //修改时间
    let setTime = time=>{
        TimeDiv.innerText = time;
    }
    //修改分数
    let setScrop = line=>{
        let s = 0;
        switch (line) {
            case 1:
                s = 10;
                break;
            case 2:
                s = 20;
                break;
            case 3:
                s = 50;
                break;
            case 4:
                s = 100;
                break;
            default:
                break;
        }
        //更改innerHtml
        scorpContent += s;
        scropDiv.innerText = scorpContent;
    }
    //判定游戏结果
    let gameOver = win=>{
        if (win) {
            winDiv.innerText = '你赢了';
        } else {
            winDiv.innerText = '你输了';
        }
    }
    //添加干扰行
    let addButtonLine = lines=>{
        //整行上移(根据传入行数来选择需要上移的行数)
        for (let i = 0; i < mapData.length - lines.length; i++) {
            mapData[i] = mapData[i+lines.length];
        }
        //计算索引，根据底部消减行来增加
        for (let i = 0; i < lines.length; i++) {
            mapData[mapData.length-lines.length+i] = lines[i];
        }
        curbox.origin.x = curbox.origin.x - lines.length;
        if (curbox.origin.x<0) {
            curbox.origin.x = 0;
        }
        //重新渲染 
        shawMatrix(mapData,gameDivs);
    }
    //导出 API
    this.init = init;
    this.down = down;
    this.left = left;
    this.right = right;
    this.rotate = rotate;
    this.falls = ()=>{while (down()) {down;}}
    this.fixed = fixed;
    this.preforNext = preforNext;
    this.clearRow = clearRow;
    this.isStop=isStop;
    this.setTime = setTime;
    this.setScrop = setScrop;
    this.gameOver =gameOver;
    this.addButtonLine =addButtonLine;
}