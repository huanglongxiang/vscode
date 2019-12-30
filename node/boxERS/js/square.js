var Square = function () {
    this.dir = 0; //方向
    //下一个需要显示的图形
    this.nextData = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    //原点   这里是指方块需要显示的坐标点
    this.origin = {
        x:0,y:0
    };
}
//是否能旋转  这里由于箭头函数this是指向父级，所以不能应用   //旋转方法
Square.prototype.canRotate =function (isValid) {
    let d = (this.dir +1)%4;
    var text = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    for (let i = 0; i < this.nextData.length; i++) {
       for (let j = 0; j < this.nextData[i].length; j++) {
            text[i][j]=this.rotato[d][i][j];
       }
    }
    return isValid(this.origin,text);
}
Square.prototype.rotate = function (num=1) {
    this.dir = (this.dir + num)%4;
    for (let i = 0; i < this.nextData.length; i++) {
       for (let j = 0; j < this.nextData[i].length; j++) {
            this.nextData[i][j]=this.rotato[this.dir][i][j];
       }
    }
}
//是否能继续下降  这里由于箭头函数this是指向父级，所以不能应用  //下降方法
Square.prototype.canDown =function (isValid) {
    var text = {};
    text.x = this.origin.x+1;
    text.y = this.origin.y ;
    return isValid(text,this.nextData);
}
Square.prototype.down = function () {
    this.origin.x += 1;
}
//左移，同上
Square.prototype.canLeft = function (isValid) {
    var text = {};
    text.x = this.origin.x;
    text.y = this.origin.y-1;
    return isValid(text,this.nextData);
}
Square.prototype.left = function () {
    this.origin.y -= 1;
}
//右移，同上
Square.prototype.canRight = function (isValid) {
    var text = {};
    text.x = this.origin.x;
    text.y = this.origin.y+1;
    return isValid(text,this.nextData);
}
Square.prototype.right = function () {
    this.origin.y += 1;
}