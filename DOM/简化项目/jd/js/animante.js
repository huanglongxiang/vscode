// 简单动画实现
function animation(element,target,responseTime){
    if (element.timeAnimal) {
        clearInterval(element.timeAnimal);
        element.timeAnimal = null;
    }
   
    //使用定时器
    element.timeAnimal = setInterval(function(){
        var step = 10;       //步进
        var current = element.offsetLeft;// 盒子当前的位置
        // 当动画往回执行时，目标位置会小于开始位置，因此在执行动画时需要对开始与结束位置进行对比，如果是目标小于初始位置，就让步进为负数
        if (current > target) {
            // 通过绝对值的方式使得步进强制为负数，避免负负得正，左右摇摆的情况
            step = -Math.abs(step);
        }
     
        //还可以通过当前位置与目标位置的差值来确定是否到达目标位置 及 |目标位置-当前位置| <= |步进|，就代表到达了目标位置
        if (Math.abs(target-current) < Math.abs(step)) {
            clearInterval(element.timeAnimal);
            element.style.left = target + 'px';
            return;
        } 
        //移动盒子
        current += step;
        element.style.left = current +'px';
    },responseTime)
}