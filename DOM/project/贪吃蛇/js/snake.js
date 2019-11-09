;(function () {
    var absolute = 'absolute';
    var len = [];
    /* 2、创建蛇对象 */
    /* 思路：
        蛇的属性：长，宽，蛇头，蛇身，颜色,位置
        蛇的方法：移动，吃食物 */
    function Snake(params) {
        var params = params || {};
        this.background = params.background || 'blue';
        this.width = params.width || 20;
        this.height = params.height || 20;
        this.body = [
            { x: 3, y: 2, color: 'yellow' },
            { x: 2, y: 2, color: 'blue' },
            { x: 1, y: 2, color: 'blue' }
        ];
        this.direction = params.direction || 'right';
    }
    Snake.prototype = {
        constructor: Snake,
        //渲染
        render: function (map) {
            //创建蛇节点
            for (let i = 0, le = this.body.length; i < le; i++) {
                // 创建节点
                var snakeNode = this.body[i];
                var node = document.createElement('div');
                node.style.position = absolute;
                node.style.width = this.width + 'px';
                node.style.height = this.height + 'px';
                node.style.left = snakeNode.x * this.width + 'px';
                node.style.top = snakeNode.y * this.height + 'px';
                node.style.backgroundColor = snakeNode.color;
                //写入界面
                map.appendChild(node);
                len.push(node);
            }
        },

        //移动
        snakemove: function (foot,map) {
            //删除蛇身
            remove();
            //蛇身移动
            for (let i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
            //蛇头移动
            var heard = this.body[0];
            switch (this.direction) {
                case 'right':
                    heard.x += 1;
                    break;
                case 'left':
                    heard.x -= 1;
                    break;
                case 'top':
                    heard.y -= 1;
                    break;
                case 'bottom':
                    heard.y += 1;
                    break;
            }
            console.log(foot.x)
              //当蛇头与食物相遇时调用吃方法,通过两者的x值与y值比较
              if (this.body[0].x * this.width === foot.x && this.body[0].y * this.height === foot.y) {
                this.body.push({
                    x: this.body[this.body.length-1].x,
                    y: this.body[this.body.length-1].y,
                    color: this.body[this.body.length-1].color
                });
                foot.render(map);
            }
        }
    }
    //移动
    function remove() {

        for (let i = len.length - 1; i >= 0; i--) {
            len[i].parentNode.removeChild(len[i]);
        }
        len = [];
    }
    window.Snake = Snake;
})()


