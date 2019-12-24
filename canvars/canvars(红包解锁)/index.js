var imageOne = document.querySelector('img');
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var canvas = document.querySelector('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var context = canvas.getContext('2d');
var image = new Image();
var radio = 50;
var clippingRegion = { x: -1, y: -1, r: radio };
var leftCanvastoWindow = 0, topCanvastoWindeow = 0;//记录画布相对于大图需要显示的坐标（左边，顶部位移度）

image.src = '../canvar(图像处理)/img/img.jpg';
//设置位移度
leftCanvastoWindow = (imageOne.naturalWidth - canvas.width) / 2;
topCanvastoWindeow = (imageOne.naturalHeight - canvas.height) / 2;

//事件处理
image.onload = function (e) {
    //在画布上加载图像
    initeCanvar();
    //设置容器宽高
    document.querySelector('.content').style.height = canvasHeight + 'px';
    document.querySelector('.content').style.width = canvasWidth + 'px';
    //设置图片宽高
    imageOne.style.height = imageOne.naturalHeight + 'px';
    imageOne.style.width = imageOne.naturalWidth + 'px';

    //设置底图位置
    imageOne.style.left = -leftCanvastoWindow + 'px';
    imageOne.style.top = -topCanvastoWindeow + 'px';

}
//阻止默认事件，禁止滑动
canvas.addEventListener('touchstart',function(e){
    e.preventDefault();
})


//加载图像
function initeCanvar() {
    //判断canvar画布大于图像的情况
    var theleft = leftCanvastoWindow < 0 ? (-leftCanvastoWindow) : 0;
    var thetop = topCanvastoWindeow < 0 ? (-topCanvastoWindeow) : 0;
    //重置剪辑区域，由于在show时，将其默认值给更改了
    clippingRegion = {
        x: Math.random() * (canvas.width - 2 * radio - 2 * theleft) + radio + theleft,
        y: Math.random() * (canvas.height - 2 * radio - 2 * thetop) + radio + thetop,
        r: radio
    };
    draw(image, clippingRegion);
}
//剪切图像需要显示的区域
function setclippingRegin(clippingRegion) {
    context.beginPath();
    context.lineWidth = 5;
    //绘制剪辑区域
    context.arc(
        clippingRegion.x,
        clippingRegion.y,
        clippingRegion.r,
        0, Math.PI * 2, false);
    context.strokeStyle = '#ccc';
    context.stroke();
    context.clip();
   

}
//动画渲染
function draw(image, clippingRegion) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    console.log(leftCanvastoWindow, topCanvastoWindeow);
    //在加载图片之前，就将图像给剪辑出来
    setclippingRegin(clippingRegion);
    context.drawImage(
        image,
        Math.max(leftCanvastoWindow, 0),
        Math.max(topCanvastoWindeow, 0),
        Math.min(canvas.width, image.width),
        Math.min(canvas.height, image.height),
        leftCanvastoWindow < 0 ? (-leftCanvastoWindow) : 0,
        topCanvastoWindeow < 0 ? (-topCanvastoWindeow) : 0,
        Math.min(canvas.width, image.width),
        Math.min(canvas.height, image.height)
    );
    context.restore();
}
//控制剪辑区域显示
function reset() {
    initeCanvar();
}
//控制整张图片显示
function show() {
    var timeId = setInterval(() => {
        clippingRegion.r += 30;
        if (clippingRegion.r > 2 * Math.max(canvas.width, canvas.height)) {
            clearInterval(timeId);
        }
        draw(image, clippingRegion);
    }, 30);
}