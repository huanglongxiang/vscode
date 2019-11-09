//获取元素
var newsT = document.getElementById('newsT');
var flag = document.getElementById('flag');
var newContainer = document.getElementById('newsContainer');

window.onload = function () {
    //定义方法变量
    var arry = {
        mousMoven: function () {
            animation(flag, this.offsetLeft - 3, 30);
            //让内容显示与隐藏
            for (let i = 0, l = newContainer.children.length; i < l; i++) {
                var div = newContainer.children[i];
                if(div.className.indexOf('hide') === -1){
                    div.className = 'news-b hide';
                }
            }
            // 显示对应的内容
            var index = parseInt(this.getAttribute('index'));
            newContainer.children[index].className = 'news-b show';
        }
    }
    //鼠标移入时红线滑入到鼠标悬停项
    for (let i = 0; i < 2; i++) {
        newsT.children[i].setAttribute("index", i);
        newsT.children[i].addEventListener('mouseover', arry.mousMoven, false);
    }
}

