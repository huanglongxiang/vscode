var bodytop = my$('top');
var totop = my$('totop');
//获取滚动出去的距离，如果距离大于10像素，那么就让顶部高度改变，同时显示回到顶部按钮
window.onscroll = function(){
    var scrolltop = getScroll().scrollTop;
    if (scrolltop > 10) {
        // 改变顶部高度
        bodytop.className = 'header fixed';
        // 显示回到顶部
        totop.style.display = 'block';
    }else{
        bodytop.className = 'header';
        totop.style.display = 'none';
    }
}
//点击回到顶部按钮，让页面以动画的形式回到顶部。
var timeId = null
totop.onclick = function(){
    if (timeId) {
        clearInterval(timeId);
        timeId = null;
    }
    timeId = setInterval(function(){
        //定义步进
        var step = 10;
        //定义目标位置
        var target = 0;
        //定义当前位置
        var curent = getScroll().scrollTop;
        if (curent > target) {
            step = -Math.abs(step);
        }
        if (Math.abs(target-curent) < Math.abs(step)) {
            clearInterval(timeId);
            document.scrollTop = target;
            document.documentElement.scrollTop = target;
        }
        curent += step;
        document.scrollTop = curent;
        document.documentElement.scrollTop = curent;
    },5)
}