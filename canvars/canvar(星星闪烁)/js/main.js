/* 1、加载图片到画布上 */
let con;        //标签
let ctx;         //画布
let w;           //画布宽
let h;           //画布高
let padLef = 100;  
let padTop= 100;
let bgWidth;
let bgHeight;

let girlBg = new Image();
let starImage = new Image();

let num = 60;  //星星数量
let starts =[];  //星星对象数组
let lastTime;   //上一次刷新时间
let diffTime;   //当前时间与上次刷新时间差
let flag;           //星星开关

var life = 0;       //透明度

//初始化画布
function init(){
    con = document.querySelector('canvas');
    ctx = con.getContext('2d');

    w = con.width;
    h = con.height;
    //加载图片
    girlBg.src = 'img/girl.jpg';
    starImage.src = 'img/star.png';
    //初始化星星对象
    for (let i = 0; i < 60; i++) {
        let star = new Start();
        starts.push(star);
        starts[i].init();
    }
    //初始化时间
    lastTime = Date.now();
    //鼠标事件处理
    document.addEventListener('mousemove',move);

    //动画渲染
    gameloop();
   
}
//绘制背景
function drawBackground(){
    ctx.fillStyle = 'pink';
    ctx.fillRect(0,0,w,h);
}

//渲染女孩图片
function drawGrail(){
    ctx.drawImage(girlBg,100,100,600,300);
}

//刷新画布
function gameloop(){
    //循环调用gameloop函数
    window.requestAnimationFrame(gameloop);
    drawBackground();
    //绘制图片
    drawGrail();
    //时间设定
    let now = Date.now();
    diffTime =now - lastTime ;
    //绘制多个星星
    for (let i = 0; i < starts.length; i++) {
        starts[i].draw(ctx,starImage,life);
        starts[i].glitter(diffTime);
       
    }
    lastTime = now;
    starLife(flag,diffTime)
}

//获取鼠标是否移入至图像内部
function move(e) {
    let px = e.offsetX || e.layerX;
    let py = e.offsetY || e.layerY;
    if (px > 100 && px < 700 && py > 100 && py < 400) {
        flag = true;
    }else{
        flag = false;
    }
}


document.body.onload = init;