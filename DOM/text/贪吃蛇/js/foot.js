/* 1、创建食物对象
食物特性：食物会在地图中随机生成 */
/* 食物的属性 ：宽，高，x坐标，y坐标
    食物方法：随机出现，被吃掉
*/
;(function(){
    var absolute = 'absolute';   
    var footArr = [];

    function Foot(params) {
        params = params || {};
        this.background = params.background || 'green';
        this.width = params.width || 20;
        this.height = params.height || 20;
        this.x = params.x || 0;
        this.y = params.y || 0;
    }
   
    Foot.prototype = {
        constructor: Foot,
        //渲染
        render: function (map) {
            remove();
            //生成坐标
            this.x = this.width * Tools.random(map.offsetWidth / this.width - 1, 1);
            this.y = this.height * Tools.random(map.offsetHeight / this.height - 1, 1);

            var div = document.createElement('div');
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.position = absolute;
            div.style.top = this.y + 'px';
            div.style.left = this.x + 'px';
            div.style.background = this.background;
            map.appendChild(div);
            footArr.push(div);
        }
    }

    function remove() {
      for (let i = footArr.length-1; i >= 0; i--) {
          //删除元素
          footArr[i].parentNode.removeChild(footArr[i]);
          footArr.splice(i,1);
      }
    }
    window.Foot = Foot;
}())






