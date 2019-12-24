var canvasWidth = Math.min(800,$(window).width()-20);
var canvasHeight = canvasWidth;

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var isMousDown = false;//判断鼠标状态
var lastMous = { x: 0, y: 0 };//记录上一次鼠标的位置
var lastTimestamp = 0;//记录上一次点出现的位置，处理方式与鼠标位置记录一样
var lastLineWidth = -1;//记录上一次的笔画线条宽度
var strokeStyle = 'black';//动态选择画笔颜色

let maxLineWidth = 20;//最大允许宽
let minLineWidth = 1;//最小允许宽
let maxv = 10;//最大速度
let minv = 0.1//最小速度

//绘制背景框
function drawGrid() {
    context.save();
    context.strokeStyle = 'rgb(230,11,9)';
    /* 绘制矩形 */
    context.beginPath();
    context.moveTo(3, 3);
    context.lineTo(canvasWidth - 3, 3);
    context.lineTo(canvasWidth - 3, canvasHeight - 3);
    context.lineTo(3, canvasHeight - 3);
    context.closePath();
    context.lineWidth = 6;
    context.stroke();
    /* 绘制虚线 */
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(canvasWidth, canvasHeight);

    context.moveTo(0, canvasHeight);
    context.lineTo(canvasWidth, 0);

    context.moveTo(canvasWidth / 2, 0);
    context.lineTo(canvasWidth / 2, canvasHeight);

    context.moveTo(0, canvasHeight / 2);
    context.lineTo(canvasWidth, canvasHeight / 2);

    context.setLineDash([5, 10]);//实现绘制虚线
    context.lineWidth = 1;
    context.stroke();

    context.restore();
}
//获取鼠标在canvars画布中的位置
function getXandY(x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
        x: x - bbox.left,
        y: y - bbox.top,
    }
}
//获取当前点与上一个点的距离
function getDistance(loc1, loc2) {
    //勾股定理应用
    return Math.sqrt((loc1.x - loc2.x) * (loc1.x - loc2.x) + (loc1.y - loc2.y) * (loc1.y - loc2.y));
}
//动态计算lineWidth的宽度
function getLineWidth(t, s) {
    //路程/时间=速度
    var v = s / t;
    var resultLineWidth;
    //判断步长来规定最大宽度与最小宽度
    if (v <= minv) {
        resultLineWidth = maxLineWidth;
    } else if (v >= maxv) {
        resultLineWidth = minLineWidth;
    } else {
        //最大宽度 - (当前速度-最小速度)/(最大速度-最小速度)*（最大宽度-最小宽度）
        resultLineWidth = maxLineWidth - (v - minv) / (maxv - minv) * (maxLineWidth - minLineWidth);
    }
    //判断是否时第一次计算宽度
    if (lastLineWidth == -1) {
        return resultLineWidth;
    }
    //取上一次的2/3+这一次的1/3，使得lineWidth的过度更加平滑
    return lastLineWidth * 2 / 3 + resultLineWidth * 1 / 3;
}
//鼠标按下逻辑
function startMouse(point) {
    isMousDown = true;
    //当鼠标按下时，开始记录上一次的位置
    lastMous = getXandY(point.x, point.y);
    //记录鼠标按下时对应的时间
    lastTimestamp = new Date().getTime();
}
//鼠标离开及停止逻辑
function endMouse() {
    isMousDown = false;
}
//鼠标移动逻辑
function moveMouse(point) {
    //记录每一次鼠标的位置
    var curcol = getXandY(point.x, point.y);
    //计算两点之间的距离
    var s = getDistance(curcol, lastMous);//路程

    //时间因素计算
    var curcolTimeStamp = new Date().getTime();
    var t = curcolTimeStamp - lastTimestamp;//时间

    //动态通过鼠标位移时间来计算lineWidth的宽度
    var lineWidth = getLineWidth(t, s);
    //绘制逻辑实现
    context.beginPath();
    context.moveTo(lastMous.x, lastMous.y)
    context.lineTo(curcol.x, curcol.y);

    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.lineCap = 'round';//增加圆形的帽子，让鼠标线条之间过度的更加平滑
    context.lineJoin = 'round';//同上，效果加倍

    context.stroke();
    context.closePath();

    //并将值赋给上一个
    lastMous = curcol;
    lastTimestamp = curcolTimeStamp;
    lastLineWidth = lineWidth;
}

//方法引用
drawGrid();//绘制背景

//事件处理
// (PC)
canvas.onmousedown = function (e) {
    e.preventDefault();
    startMouse({x:e.clientX,y:e.clientY});
}
canvas.onmouseup = function (e) {
    e.preventDefault();
    endMouse();
}
canvas.onmouseout = function (e) {
    e.preventDefault();
    endMouse();
}
canvas.onmousemove = function (e) {
    e.preventDefault();
    if (isMousDown) {
        moveMouse({x:e.clientX,y:e.clientY})
    }
}
//移动端
canvas.addEventListener('touchstart',function (e) {
    e.preventDefault();
    //获取用户所触碰激发的点(多点触控)
    var touch = e.touches[0];//只捕捉一个手指
    startMouse({x:touch.pageX,y:touch.pageY});
})
canvas.addEventListener('touchmove',function (e) {
    e.preventDefault();
    if (isMousDown) {
        var touch = e.touches[0];//只捕捉一个手指
        moveMouse({x:touch.pageX,y:touch.pageY})
    }
})
canvas.addEventListener('touchend',function (e) {
    e.preventDefault();
    endMouse();
})

/* html交互实现模块 */
//清空画布
$('.clear').on('click', function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();//绘制背景
})
//改变画笔颜色
$('.domDispose').find('li').on('click',function () {
    $(this).addClass('select_color').siblings().removeClass('select_color');
    strokeStyle = $(this).css('background-color');
})
//适配：更改宽度
$('.domDispose').css('width',canvasWidth);
