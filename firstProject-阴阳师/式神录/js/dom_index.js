/* 添加壁纸生成相册模式 */
function addPhotos() {
    let template = document.querySelector('#wrap').innerHTML;
    let html = [];
    let nav = [];
    for (let i = 0; i < Tsdata.length; i++) {
        let _html = template.replace('{{index}}', i)
            .replace('{{src}}', Tsdata[i].img)
            .replace('{{caption}}', Tsdata[i].caption)
            .replace('{{desc}}', Tsdata[i].desc);
        html.push(_html);
        nav.push('<span class="i" id="nav_' + i + '" onclick="turn(document.querySelector(\'#photo_' + i + '\'))"></span>')
    }
    /* 渲染页面元素*/
    html.push('<nav>' + nav.join('') + '</nav>')
    document.querySelector('#wrap').innerHTML = html.join('');

    let arr = [0, 19];
    pitchPhoto(getRandom(arr));

}
/* 获取指定范围的随机数 */
function getRandom(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    return Math.floor((Math.random() * (max - min) + min));
}
/* 计算图片活动边界 */
function rang() {
    let bgVessel = document.querySelector('#wrap');
    let boxVessel = document.querySelector('.photo');
    /* 左边距 */
    let left = {
        x: [0, bgVessel.offsetWidth / 2 - boxVessel.offsetWidth / 2],
        y: [0, bgVessel.offsetHeight - boxVessel.offsetHeight]
    };
    let right = {
        x: [bgVessel.offsetWidth / 2 + boxVessel.offsetWidth / 2, bgVessel.offsetWidth - boxVessel.offsetWidth],
        y: [0, bgVessel.offsetHeight - boxVessel.offsetHeight]
    }
    return {
        left: left, right: right
    };
}
/* 排序海报 */
function pitchPhoto(index) {
    /* 1、随机选取一张图片放在页面中心 */
    let indexCenter = document.querySelector('#photo_' + index);
    let indexNav = document.querySelector('#nav_' + index);
    let _photo = document.querySelectorAll('.photo');
    /* 清除所有的默认样式 */
    for (let i = 0; i < _photo.length; i++) {
        _photo[i].className = _photo[i].className.replace(/\s*photo_center\s*/, ' ');
    }
    if (!/\s*photo_center\*s/.test(indexCenter.className)) {
        indexCenter.style = "";
        indexCenter.className += ' photo_center';
        indexNav.className += ' i_current';
    };
    /* 2、其它图片位置随机生成 */
    let coord = rang();
    let photo = [];
    for (let i = 0; i < _photo.length; i++) {
        if (index != i) {
            photo.push(_photo[i]);
        }
    }
    let leftPhoto = photo.splice(0, Math.floor(photo.length / 2));
    let rightPhoto = photo;
    for (const key in leftPhoto) {
        let left = leftPhoto[key];
        left.style.left = getRandom(coord.left.x) + 'px';
        left.style.top = getRandom(coord.left.y) + 'px';
        left.style.transform = 'rotate(' + getRandom([0, 180]) + 'deg)';
    }
    for (const key in rightPhoto) {
        let right = rightPhoto[key];
        right.style.left = getRandom(coord.right.x) + 'px';
        right.style.top = getRandom(coord.right.y) + 'px';
        right.style.transform = 'rotate(' + getRandom([-150, 150]) + 'deg)';
    }
    let navs = document.querySelectorAll('.i');
    for (let i = 0; i < navs.length; i++) {
        navs[i].className = navs[i].className.replace(/\s*i_current\s*/, ' ');
        navs[i].className = navs[i].className.replace(/\s*i_back\s*/, ' ');
    }
    document.querySelector('#nav_' + index).className += ' i_current';
}
/* 控制翻转 */
function turn(elem) {
    let cls = elem.className;
    let n = elem.id.split('_')[1];
    if (!/photo_center/.test(cls)) {
        return pitchPhoto(n);
    }
    if (/photo_font/.test(cls)) {
        cls = cls.replace(/photo_font/, 'photo_back');
        document.querySelector('#nav_' + n).className += ' i_back';
    } else {
        cls = cls.replace(/photo_back/, 'photo_font');
        document.querySelector('#nav_' + n).className = document.querySelector('#nav_' + n).className.replace(/\s*i_back\s*/, ' ');
    }
    return elem.className = cls;
}
/* 入口 */
addPhotos();