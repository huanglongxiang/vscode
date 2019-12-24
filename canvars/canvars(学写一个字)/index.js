var canvasWidth = 600;
var canvasHeight = canvasWidth;

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var isMousDown = false;//判断鼠标状态
var lastMous = {x:0,y:0};//记录上一次鼠标的位置

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

    context.setLineDash([5,10]);//实现绘制虚线
    context.lineWidth = 1;
    context.stroke();

    context.restore();
}
//获取鼠标在canvars画布中的位置
function getXandY(x,y) {
    var bbox = canvas.getBoundingClientRect();
    return {
        x:x- bbox.left,
        y:y-bbox.top,
    }
}
//获取当前点与上一个点的距离

drawGrid();
canvas.onmousedown = function (e) {
    e.preventDefault();
    isMousDown = true;
    //当鼠标按下时，开始记录上一次的位置
    lastMous = getXandY(e.clientX,e.clientY);
}
canvas.onmouseup = function (e) {
    e.preventDefault();
    isMousDown = false;
}
canvas.onmouseout = function (e) {
    e.preventDefault();
    isMousDown = false;
}
canvas.onmousemove = function (e) {
    e.preventDefault();
    if( isMousDown ){
        //记录每一次鼠标的位置
        var curcol = getXandY(e.clientX,e.clientY);
        //绘制逻辑实现
        context.beginPath();
        context.moveTo(lastMous.x,lastMous.y)
        context.lineTo(curcol.x,curcol.y);
        
        context.strokeStyle = 'black';
        context.lineWidth = 10;
        context.lineCap = 'round';//增加圆形的帽子，让鼠标线条之间过度的更加平滑
        context.lineJoin = 'round';//同上，效果加倍

        context.stroke();
        context.closePath();

        //并将值赋给上一个
        lastMous = curcol;
    }
}