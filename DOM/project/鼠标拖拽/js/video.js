window.onload = function () {
    //获取元素 媒体 播放按钮  进度条 时间 全屏按钮
    let video = document.getElementById('video'); //媒体元素
    let play = document.getElementById('play');    //播放按钮
    let time = document.getElementById('time');
    let progress = document.getElementById('progress');//进度条
    let pgline = progress.children[0];      //进度
    let startTime = time.children[0];                       //当前时长
    let endTime = time.children[1];                         //总时长
    let arrows = document.getElementById('arrows');//全屏按钮
    // 1.点击播放按钮让视频播放,同时播放按钮样式改变
    //2.再次点击播放按钮,视频暂停,样式恢复
    play.onclick = function (e) {
        if (this.className.indexOf('fa-pause') > -1) {
            this.className = 'swith fa fa-play';
            video.pause();
        } else {
            video.play();
            this.className = 'swith fa fa-pause';
        }
    }
    //3.视频加载到页面中后,总时长显示
    //格式化时间
    let timeleng = video.duration;
    endTime.innerText = getDate(timeleng);
    //4.视频播放期间,当前时间开变更   宽度 = 总宽度 * 当前时长/总时长 
    let width = progress.offsetWidth;
    video.ontimeupdate = function (e) {
        //获取当前进度时间
        startTime.innerText = getDate(e.target.currentTime);
        //进度条同步  5.监听进度条行走距离,与当前时长相对应
        pgline.style.width = width * (e.target.currentTime / e.target.duration) + 'px';
    };
    //判定是否结束
    video.onended = function(e){
        video.currentTime = 0;
        play.className = 'swith fa fa-play';
    }
    //6,快进功能实现
    progress.onclick = function (e) {
        let x = e.offsetX;  //获取鼠标点击位置
        pgline.style.width = x + 'px';
        video.currentTime = timeleng * (x / width);
    }
    //7.全屏功能实现 fa-compress fa-arrows-alt
    arrows.onclick = function(){
        if (this.className.indexOf('fa-compress') > -1) {
            this.className = 'full fa fa-arrows-alt';
            video.exitFullScreen();     //进入全屏
        }else{
            this.className = 'full fa fa-arrows-alt';
            video.requestFullscreen(); //退出全屏
        }
    }

    //工具方法 获取时间
    function getDate(num) {
        let hours = Math.floor(num / 60 / 60);
        let minut = Math.floor(num / 60);
        let second = Math.floor(num % 60);
        hours = hours <= 10 ? ('0' + hours) : hours;
        minut = minut <= 10 ? ('0' + minut) : minut;
        second = second <= 10 ? ('0' + second) : second;
        return hours + ':' + minut + ':' + second;
    }
}