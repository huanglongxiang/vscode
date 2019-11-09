// 工具
(function () {
    var Tools = {
        random:function(max,min) {
            return Math.floor(Math.random() * (max - min +1) +min);
        }
    }
    window.Tools = Tools;
})()
