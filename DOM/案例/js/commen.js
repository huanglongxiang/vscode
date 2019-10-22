// 根据ID获取元素
function my$(id) {
    return document.getElementById(id);
}
//处理浏览器兼容性
//获取第一个子元素
function getFirstElementChild(element) {
    var node, nodes = element.childNodes, i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}
//处理兼容性
// 获取下一个兄弟元素
function getNextElementChild(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}
//处理兼容性
//innerText和textContent的兼容性问题
// 获取标签中的内容
function setInnerText(element, content) {
    //判断当前浏览器是否支持innerText
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}
// 处理兼容性
//eventName,不带on,click mouseover mouseout
function addEventListener(element, eventName, fn) {
    //判断当前浏览器是否支持addEventListener方法
    if (element.addEventListener) {
        element.addEventListener(eventName, fn);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, fn);
    } else {
        // 相当于element.onclick = fn
        element['on' + eventName] = fn
    }
}
//兼容性
//移除事件处理
function removeEventListener(element, eventName, fn) {
    if (element.removeEventListener) {
        element.removeEventListener(eventName, fn);
    } else if (element.detachEvent) {
        element.detachEvent('on' + eventName, fn);
    } else {
        element['on' + eventName] = null;
    }
}
// 兼容性
// 获取页面滚动出的的距离
function getScroll() {
    
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    }
}
// 兼容性
//获取鼠标位置
function getPage(e) {
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clienY + getScroll().scrollTop;
    return {
        pageX: pageX,
        pageY: pageY
    }
}
// 格式化日期对象，返回yyyy-MM-dd HH:mm:ss的形式
function formatDate(date) {
    // 判断参数date是否是日期对象
    if (!(date instanceof Date)) {
        console.error('date不是日期对象');
        return;
    }
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    var day = data.getDate();
    var hour = data.getHours();
    var minute = data.getMinutes();
    var second = data.getSeconds();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return year + '-' + month + '-' + day + '-' + hour + '-' + minute + ':' + second;
}
//获取两个日期的时间差
function getInterval(start, end) {
    //计算两个时间相差的毫秒数
    var interval = end - start;
    //求相差的天数/小时/分钟数/秒数
    var day, hour, minute, second;
    interval /= 1000;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round(interval / 60 / 60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);
    return{
        day:day,
        hour:hour,
        minute:minute,
        second:second
    }
}
