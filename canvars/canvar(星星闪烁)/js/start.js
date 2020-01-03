let Start = function () {
    this.x;
    this.y;
    this.act;   //需要显示第几祯的图片
    this.timeOut; //控制闪动速度
    this.sx;        //x轴的位移速度
    this.sy;        //y轴的位移速度
}

//初始化星星
Start.prototype.init = function () {
    this.x = random(100, 680);
    this.y = random(100, 400);
    this.act = random(0,7);
    this.timeOut = random(0,10);
    let sx =  random(-1.5,1.5);
    let sy =  random(-1.5,1.5);
    sx  = sx == 0 ? random(-1.5,1.5):sx;
    sy  = sy == 0 ? random(-1.5,1.5):sy;
    this.sx = sx ;
    this.sy = sy;
}

//实现星星闪动
Start.prototype.glitter = function (diffTime) {
    //星星随机位移
    this.x += this.sx*diffTime*0.009;
    this.y += this.sy*diffTime*0.009;
    //重生判断
    if (this.x < 100 || this.x> 700) {
        this.init();
        return;
    }
    if (this.y < 100 || this.y> 400) {
        this.init();
        return;
    }
    //控制闪动速度
    this.timeOut += diffTime ;
    if (this.timeOut>50) {
        this.act = this.act > 7 ? 0 : this.act += 1;
        this.timeOut = 0;
    }
}

//绘制星星
Start.prototype.draw = function (ctx, starImage,life) {
    ctx.save();
    ctx.globalAlpha = life;
    ctx.drawImage(starImage, this.act*7,0,7,7,this.x,this.y,7,7);
    ctx.restore();
}

//星星生命
starLife = function (flag,diffTime) {
    if (flag) {
        life += diffTime*0.05*0.3;
        if (life > 1) {
            life = 1;
        }
    }else{
        life -= diffTime*0.05*0.3;
        if (life<0) {
            life = 0
        }
    }
}



