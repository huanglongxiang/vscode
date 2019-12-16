let endTime = new Date();//结束时间
endTime.setTime(endTime.getTime()+3600*1000); 
const colors = [
    '#4008f6',
    '#08c13c',
    '#0cf4fc',
    '#53a9ac',
    '#7a15f7',
    '#d2bbee',
    '#c0bfc0',
    '#a5edf6',
    '#ea083d',
    '#d28cd6'
];//随机颜色

let WINDOW_WIDTH = 1024;//画布宽
let WINDOW_HEIGHT = 768;//画布高
let RADIUS = 8;//半径
let MARGIN_TOP = 60;//距离画布上边的距离
let MARGIN_LEFT = 30;//距离画布左边的距离
let curShowTimeSeconde = 0;//剩余时间
let balls = []; //存放需要添加的小球

window.onload = function () {
    let canves = document.querySelector('canvas');
    let context = canves.getContext('2d');

    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;
    MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
    MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5);  
    RADIUS = Math.round((WINDOW_WIDTH*4 /5/108)-1);

    //画布宽高设定
    canves.width = WINDOW_WIDTH;
    canves.height = WINDOW_HEIGHT;

    //总共剩余时间获取
    curShowTimeSeconde = getCurShowTimeSeconde();

    //动画实现
    setInterval(() => {
        render(context);
        update();
    }, 30)

}

//改变时间
function update() {
    let nextShowTimeSeconds = getCurShowTimeSeconde();

    let nexthours = parseInt(nextShowTimeSeconds / 3600);
    let nextminutes = parseInt((nextShowTimeSeconds - nexthours * 3600) / 60);
    let nextseconds = parseInt(nextShowTimeSeconds % 60);

    let curhours = parseInt(curShowTimeSeconde / 3600);
    let curminutes = parseInt((curShowTimeSeconde - curhours * 3600) / 60);
    let curseconds = parseInt(curShowTimeSeconde % 60);

    //对比当前时间与下一次要显示的时间
    if (curseconds != nextseconds) {
        //绘制时分秒需要掉落下来的圆
        if (parseInt(curhours / 10) != parseInt(nexthours / 10))
            addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curhours / 10))
        if (parseInt(curhours % 10) != parseInt(nexthours % 10))
            addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(curhours % 10))

        if (parseInt(curminutes / 10) != parseInt(nextminutes / 10))
            addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(curminutes / 10))
        if (parseInt(curminutes % 10) != parseInt(nextminutes % 10))
            addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(curminutes % 10))

        if (parseInt(curseconds / 10) != parseInt(nextseconds / 10))
            addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(curseconds / 10))
        if (parseInt(curseconds % 10) != parseInt(nextseconds % 10))
            addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(curseconds % 10))

        curShowTimeSeconde = nextShowTimeSeconds;
    }
    //更新已经存在的小球（动画）
    updateBalls();

}

//计算剩余时间
function getCurShowTimeSeconde() {
    let nowDate = new Date();
    // let ret = endTime.getTime() - nowDate.getTime();
    // ret = Math.round(ret / 1000);
    // return ret >= 0 ? ret : 0;
    let ret = nowDate.getHours()*3600+nowDate.getMinutes()*60+nowDate.getSeconds();
    return ret;
}

//绘制当前画布
function render(cxt) {
    //获取时分秒
    let hours = parseInt(curShowTimeSeconde / 3600);
    let minutes = parseInt((curShowTimeSeconde - hours * 3600) / 60);
    let seconds = parseInt(curShowTimeSeconde % 60);

    //清空画布
    cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

    //时钟
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);

    //分钟
    renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt);
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);

    //秒钟
    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt);

    //绘制需要执行动画的小球
    for (let i = 0; i < balls.length; i++) {
        cxt.fillStyle = balls[i].color;

        cxt.beginPath();
        cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI);
        cxt.closePath();

        cxt.fill();
    }
}

//绘制需要生成的数字，前两个参数是开始位置，三个参数是将数字拆分，四个参数是画布
function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = 'rgb(0,102,153)';
    for (let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                /* 计算圆心位置的方法
                  每一个方块的长 （方块为正方形）2*（R+1）1为编剧
                  CenterX:x + j * 2 * (R+1) + (R+1)
                  CenterY:y + j * 2 * (R+1) + (R+1)
                */
                cxt.beginPath();
                cxt.arc(
                    x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                    RADIUS,
                    0,
                    2 * Math.PI
                );
                cxt.closePath();
                cxt.fill();
            }
        }
    }
}

//添加彩色小球，该小球会执行动画效果
function addBalls(x, y, num) {
    for (let i = 0; i < digit[num].length; i++)
        for (let j = 0; j < digit[num][i].length; j++)
            if (digit[num][i][j] == 1) {
                let aBall = {
                    x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                    g: 1.5 + Math.random(),    //加速度取1.5---2.5之间的一个随机数
                    //-1的(多少)次方 ,Math.ceil(Math.random()*1000)随机，如果为偶数，取正1，奇数取-1，所以下面的式子取4或者-4
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                }
                balls.push(aBall);
            }
}

//更新小球位置
function updateBalls() {

    for (let i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        //这里是设置加速度，让小球有一个重力的加速过程
        balls[i].vy += balls[i].g;
        //碰撞检测
        if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
            balls[i].y = WINDOW_HEIGHT - RADIUS;
            //0.75为摩擦系数，可以实现让小球弹起
            balls[i].vy = -balls[i].vy * 0.75;
        }
    }

    //让存在在页面上的小球始终都排在数组前列，而后排的基本上都是不需要的
    let cnt = 0;
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].x+RADIUS>0&&balls[i].x-RADIUS<WINDOW_WIDTH) {
            balls[cnt++]=balls[i];
        }
    }
    //清除已经超出画布的小球
    while (balls.length > Math.min(300,cnt)) {
        balls.pop();
    }

}