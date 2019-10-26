//获取元素
var vessal =document.getElementById('content');

//生成容器
let boxlist = [];

for (let i = 0; i < 10; i++) {
    let createbox =  new Box(vessal);
    boxlist.push(createbox);
}

mains()

setInterval(mains,500);

function mains(){
    for (let i = 0; i < boxlist.length; i++) {
        boxlist[i].random();
     }
}