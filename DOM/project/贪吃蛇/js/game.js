;(function () {
   var that;

    function Game(map){
        this.foot = new Foot();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype = {
        constructior:Game,

        start:function() {
            this.foot.render(this.map);
            this.snake.render(that.map);
            /* 让蛇移动。蛇触碰到边界后，游戏结束*/   
             snakeBegin(this.map);
            // 蛇吃掉食物，食物消失，并随机生成


            // 蛇吃掉食物后，蛇节变长  
        }
    }

    function snakeBegin() {
        var timeId = setInterval(function(e) {
            that.snake.snakemove(that.foot,that.map);
            that.snake.render(that.map);
            
            var linebloor =  
            that.snake.body[0].x >= that.map.offsetWidth /  that.snake.width ||   
            that.snake.body[0].x < 0 || 
            that.snake.body[0].y >= that.map.offsetHeight /  that.snake.height ||
            that.snake.body[0].y < 0;
            //键盘控制蛇行走
            document.addEventListener('keydown',bindkey,false);
             if (linebloor) {
                alert('Game Over!!');
                clearInterval(timeId);
            }
        },150)
    }

    function bindkey(e) {
        //获取键盘码
        var key = e.keyCode; 
        switch (key) {
            case 38:
                that.snake.direction = 'top';
                break;
            case 40:
                that.snake.direction = 'bottom';
                break;
            case 39:
                that.snake.direction = 'right';
                break;
            case 37:
                that.snake.direction = 'left';
                break;
        }
    }

    window.Game = Game;
})()


