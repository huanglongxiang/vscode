// 头部隐藏导航栏
$(function () {
    $("#topBar").mouseenter(function () {
        $("#game_order").stop(true, false).fadeIn(500);

    });
    $(".topLogo").mouseenter(function () {
        $("#game_order").stop(true, false).fadeOut(500);
    });
    $(".more").mouseenter(function () {
        $("#game_order").stop(true, false).fadeOut(500);
    });

    $("#game_order").mouseleave(function () {
        $("#game_order").stop(true, false).fadeOut(500);
    });
    $("#NIE-topBar-news").mouseenter(function () {
        $("#game_order").stop(true, false).hide();
    });

});
// ---------------------------------------------
// 泛娱乐首页头部右边滚动
var ul = document.querySelector('.moreUl');
// 2. 设定定时器
setTimeout(function () {
    setInterval(function () {
        var position = ul.offsetTop;
        var step = -2;

        position += step;

        if (position > -162) {
            ul.style.top = position + 'px';
        } else {
            ul.style.top = '0px';
        }
    }, 100);
}, 1000);



// Top 头部小图显示
$(function () {
    $('#NIE-topBar-news').mouseenter(function () {
        $('#NIE-topBar-news>span>img').hide();
        $('#NIE-topBar-abc-b').show();
    });
    $('#NIE-topBar-news').mouseleave(function () {
        $('#NIE-topBar-news>span>img').show();
        $('#NIE-topBar-abc-b').hide();
    })
})
