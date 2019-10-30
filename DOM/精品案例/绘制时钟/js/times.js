var clock = document.getElementById('clock');
var ctx = clock.getContext('2d');//获取画布

var width = ctx.canvas.width;// 获取画布宽高
var height = ctx.canvas.height;
var r = width / 2;
var rem =  width / 200;
//画背景
function drawBackground() {
    ctx.save();
    ctx.translate(r, r);// 默认原点在盒子左上角，需要更改原点到盒子正中心
    ctx.beginPath();//定义路径
    ctx.lineWidth = 10 * rem; //设置线条宽度
    ctx.arc(0, 0, r - 5 * rem, 0, Math.PI * 2, false);//画圆
    ctx.stroke();//渲染  绘制
    /* 画点 */
    var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]; //定义小时点
    ctx.font =18 * rem +'px Arial'; //设置文本大小
    ctx.textAlign = 'center';//控制文本居中
    ctx.textBaseline = 'middle';
    //渲染
    hourNumbers.forEach(function (number, i) {
        //获取每一个点对应的弧度 ,用于计算每一个点对应的x坐标,  x = cos(弧度)
        var rad = 2 * Math.PI / 12 * i;
        //获取x坐标
        var x = Math.cos(rad) * (r - 30 * rem);
        var y = Math.sin(rad) * (r - 30 * rem);
        ctx.fillText(number, x, y);//设置小时数在坐标上显示
    })

    //渲染秒针跳动点
    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18 * rem);
        var y = Math.sin(rad) * (r - 18 * rem);
        ctx.beginPath();   //重置画布
        //判断是否是小时
        if (i % 5 === 0) {
            ctx.arc(x, y, 2, 0, 2 * Math.PI, false); //绘制圆，
            ctx.fillStyle = '#000';                       //设置颜色
        } else {
            ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = '#ccc';
        }
        ctx.fill();//填充
    }
}

//实现时针分针，秒针的绘制
function drawHour(hour, minute) {
    ctx.save();           //保存当前画布状态
    ctx.beginPath(); //重置画布
    var rad = 2 * Math.PI / 12 * hour;//定义弧度
    var mrad = 2 * Math.PI / 12 / 60 * minute;//定义弧度
    ctx.rotate(rad + mrad);//旋转时钟
    ctx.moveTo(0, 10 * rem); //移动原点
    ctx.lineTo(0, -r / 2);//定义线的位置
    ctx.lineWidth = 6 * rem;//定义宽度
    ctx.lineCap = 'round';//定义线帽为圆角
    ctx.stroke();// 渲染
    ctx.restore();//重置画布到之前保存时的状态
}
//画分针
function drawMinute(minute) {
    ctx.save();             //保存画布
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * minute;//定义弧度
    ctx.rotate(rad);
    ctx.moveTo(0, 10 * rem);//移动原点
    ctx.lineTo(0, -r + 30  * rem);//定义线的位置
    ctx.lineWidth = 3 * rem;//定义宽度
    ctx.lineCap = 'round';//定义线帽为圆角
    ctx.stroke();// 渲染
    ctx.restore();//重置画布到之前保存的状态
}
//画秒针
function drawSecond(second) {
    ctx.save();             //保存画布
    ctx.beginPath();
    ctx.fillStyle = 'red';
    var rad = 2 * Math.PI / 60 * second;//定义弧度
    ctx.rotate(rad);
    ctx.moveTo(-2 * rem, 20 * rem);//移动原点
    ctx.lineTo(2 * rem, 20 * rem);
    ctx.lineTo(1 * rem, -r + 18 * rem);
    ctx.lineTo(-1 * rem, -r + 18 * rem);
    ctx.fill();// 渲染
    ctx.restore();//重置画布到之前保存的状态
}

//画白点
function drawDot() {
    ctx.beginPath();
    //画圆
    ctx.arc(0, 0, 3 * rem, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#fff';
    ctx.fill();
}

function draw() {
    ctx.clearRect(0,0,width,height);    //清除
    var data = new Date();
    var hour = data.getHours();
    var minute = data.getMinutes();
    var second = data.getSeconds();
    drawBackground();
    drawHour(hour, minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore();
}
draw();
setInterval(draw,1000);

