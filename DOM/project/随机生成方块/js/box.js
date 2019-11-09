//创建方块
function Box(vessal,option){
    
    //当值为空时默认值
    var option = option || {};
    
    //设置属性
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.x = option.x || 0;
    this.y = option.y || 0;

    //设置盒子
    this.div = document.createElement('div');
    //调用元素时也需要加this
    vessal.appendChild(this.div);
    this.vessal = vessal;

    //this代表调用者，谁调用，this就指向谁
    this.inity();
}

//设置样式
Box.prototype.inity = function(){
    var box = this.div;
    box.style.background = this.background;
    box.style.width = this.width + 'px';
    box.style.height = this.height + 'px';
    box.style.position = 'absolute';
    box.style.top = this.y + 'px';
    box.style.left = this.x + 'px';
}

//设置随机函数
Box.prototype.random = function(){
      //设置随机
      var x = Tools.getRandom(this.vessal.offsetWidth/this.div.offsetWidth-1,1);
      var y = Tools.getRandom(this.vessal.offsetHeight/this.div.offsetHeight-1,1);
      //设置样式
      this.div.style.top = y*this.div.offsetHeight + 'px';
      this.div.style.left = x*this.div.offsetWidth + 'px';
      //调用颜色随机
      this.color();
}

//设置颜色随机
Box.prototype.color = function(){
    //设置颜色随机
    let r = Tools.getRandom(255,0);
    let g =Tools.getRandom(255,0);
    let b =Tools.getRandom(255,0);
    console.log();
    this.div.style.background = 'rgb('+r+','+g+','+b+')';
    this.background = 'rgb('+r+','+g+','+b+')';
}