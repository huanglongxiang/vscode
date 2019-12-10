
// -------------------------------------------
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



new Vue({
    el: '#main',
    data: {
        list: [
            { id: 1, txt: '官方网站' },
            { id: 2, txt: '新闻资讯' },
            { id: 3, txt: '游戏攻略' },
            { id: 4, txt: '同人社区' },
            { id: 5, txt: '官方渠道' },
            { id: 6, txt: '周边商城' },
            { id: 7, txt: '藏宝阁' },
            { id: 8, txt: '网易大神' }
        ],
        sslist: ['all', 'ld', 'sp', 'ssr', 'sr', 'r', 'n', 'gt'],
        share: [
            { iconfont: 'icon-weixin-copy', txt: '微信' },
            { iconfont: 'icon-yixin', txt: '易信' },
            { iconfont: 'icon-xinlangweibo', txt: '新浪微博' },
            { iconfont: 'icon-icons-', txt: '空间' }
        ],
        logoslist: [
            { url: 'https://www.163.com/', logoImg: '../images/homePage/[yys.163.com][329]netease.1.png' },
            { url: 'http://game.163.com/', logoImg: '../images/homePage/[yys.163.com][998]nie.1.png' },
            {
                url: 'http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/700E4EB3C85B469E84A28595D0F16CFC',
                logoImg: '../images/homePage/[yys.163.com][853]wen.png'
            },
            {
                url: 'http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/700E4EB3C85B469E84A28595D0F16CFC',
                logoImg: '../images/homePage/[yys.163.com][913]wen2.png'
            },
        ],
        friendline: [
            {
                url: 'http://gb.corp.163.com/gb/about/overview.html',
                txt: '公司简介'
            },
            {
                url: 'https://help.mail.163.com/service.html',
                txt: '客户服务'
            },
            {
                url: 'http://gb.corp.163.com/gb/legal.html',
                txt: '网易集团隐私政策及儿童个人信息保护规则'
            },
            {
                url: 'http://game.163.com/about/',
                txt: '网易游戏'
            },
            {
                url: 'http://game.163.com/contact/business.html',
                txt: '联系我们'
            },
            {
                url: 'http://game.163.com/contact/business.html',
                txt: '商务合作'
            },
            {
                url: 'http://hr.game.163.com/index.html',
                txt: '加入我们'
            },
            {
                url: 'http://update.unisdk.163.com/html/latest_v5.html',
                txt: '用户协议'
            }
        ],
        shishenline: [
            {
                url: '../images/homePage/[yys.163.com][823]200.png',
                name: ''
            }
        ],
        shishen: [
            { id: 0, src: '[yys.163.com][101]221.png' },
            { id: 1, src: '[yys.163.com][106]304.png' },
            { id: 2, src: '[yys.163.com][108]236.png' },
            { id: 3, src: '[yys.163.com][110]262.png' },
            { id: 4, src: '[yys.163.com][111]310.png' },
            { id: 5, src: '[yys.163.com][113]404.png' },
            { id: 6, src: '[yys.163.com][116]278.png' },
            { id: 7, src: '[yys.163.com][118]253.png' },
            { id: 8, src: '[yys.163.com][11]208.png' },
            { id: 9, src: '[yys.163.com][122]304.png' },
            { id: 10, src: '[yys.163.com][124]341.png' },
            { id: 11, src: '[yys.163.com][128]263.png' },
            { id: 12, src: '[yys.163.com][129]228.png' },
            { id: 13, src: '[yys.163.com][130]267.png' },
            { id: 14, src: '[yys.163.com][130]426.png' },
            { id: 15, src: '[yys.163.com][138]242.png' },
            { id: 16, src: '[yys.163.com][141]225.png' },
            { id: 17, src: '[yys.163.com][143]258.png' },
            { id: 18, src: '[yys.163.com][147]297.png' },
            { id: 19, src: '[yys.163.com][150]286.png' },
            { id: 20, src: '[yys.163.com][151]333.png' },
            { id: 21, src: '[yys.163.com][159]423.png' },
            { id: 22, src: '[yys.163.com][162]220.png' },
            { id: 23, src: '[yys.163.com][162]277.png' },
            { id: 24, src: '[yys.163.com][163]328.png' },
            { id: 25, src: '[yys.163.com][167]226.png' },
            { id: 26, src: '[yys.163.com][172]316.png' },
            { id: 27, src: '[yys.163.com][23]424.png' },
            { id: 28, src: '[yys.163.com][26]223.png' },
            { id: 29, src: '[yys.163.com][27]210.png' },
            { id: 30, src: '[yys.163.com][28]257.png' },
            { id: 31, src: '[yys.163.com][28]336.png' },
            { id: 32, src: '[yys.163.com][28]419.png' },
            { id: 33, src: '[yys.163.com][29]237.png' },
            { id: 34, src: '[yys.163.com][2]230.png' },
            { id: 35, src: '[yys.163.com][31]200.png' },
            { id: 36, src: '[yys.163.com][31]279.png' },
            { id: 37, src: '[yys.163.com][32]415.png' },
            { id: 38, src: '[yys.163.com][3]307.png' },
            { id: 39, src: '[yys.163.com][40]285.png' },
            { id: 40, src: '[yys.163.com][42]207.png' },
            { id: 41, src: '[yys.163.com][47]277.png' },
            { id: 42, src: '[yys.163.com][48]316.png' },
            { id: 43, src: '[yys.163.com][51]325.png' },
            { id: 44, src: '[yys.163.com][52]294.png' },
            { id: 45, src: '[yys.163.com][55]427.png' },
            { id: 46, src: '[yys.163.com][58]315.png' },
            { id: 47, src: '[yys.163.com][59]338.png' },
            { id: 48, src: '[yys.163.com][66]254.png' },
            { id: 49, src: '[yys.163.com][67]409.png' },
            { id: 50, src: '[yys.163.com][69]286.png' },
            { id: 51, src: '[yys.163.com][71]225.png' },
            { id: 52, src: '[yys.163.com][74]273.png' },
            { id: 53, src: '[yys.163.com][76]334.png' },
            { id: 54, src: '[yys.163.com][7]268.png' },
            { id: 55, src: '[yys.163.com][80]313.png' },
            { id: 56, src: '[yys.163.com][81]203.png' },
            { id: 57, src: '[yys.163.com][83]253.png' },
            { id: 58, src: '[yys.163.com][8]319.png' },
            { id: 59, src: '[yys.163.com][95]211.png' },
            { id: 60, src: '[yys.163.com][96]234.png' }
        ],
        flag: true,
    },
    methods: {
        /* 点击平移 */
        move(e) {
            let download = document.getElementById('download');
            let a = e.target;
            if (this.flag) {
                download.style.right = 0 + "px";
                a.className = 'btn abtnremove';
            } else {
                download.style.right = -310 + "px";
                a.className = a.className.replace(/\s*abtnremove\s*/, '');
            }
            download.style.transition = "all 0.5s ease";
            this.flag = !this.flag;
        },
        /* 选择分类 */
        classify(e) {
            let lis = e.currentTarget.parentNode.children;
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';
                lis[i].children[0].children[0].style.opacity = 0;
                lis[i].children[0].children[0].style.left = '10px';
                lis[i].children[0].children[0].style.transition = "all 0.5s ease";
            }
            e.currentTarget.className = 'active';
            e.currentTarget.children[0].children[0].style.opacity = '1';
            e.currentTarget.children[0].children[0].style.left = '30px';
        }
    }
});

let fos = document.getElementById('shishen_list');
fos.children[0].className = 'active';
fos.children[0].children[0].children[0].style.opacity = '1';
fos.children[0].children[0].children[0].style.left = '30px';

/* 滚动 */
let cententBox = document.getElementById('cententBox');
let centent = document.getElementById('centent');
let scroll = document.getElementById('scroll');
let scroll_line = document.getElementById('scorll_line');
let scroll_tip = document.querySelector('.scroll_tip');


let bl =( cententBox.offsetHeight / centent.clientHeight )*scroll.offsetHeight;


window.onload = function(){
    cententBox.addEventListener('mouseenter',enter,false);
    cententBox.addEventListener('scroll',scrolls,false);
    cententBox.addEventListener('mouseleave',leave,false);
}
function enter(e){
    scroll_line.style.height = bl + 'px';
    scroll.style.height = cententBox.offsetHeight +'px';
    
}
function leave(e){
    scroll_line.style.display = 'none';
}
function scrolls(e){
    let i = 3;
    let timeId = setInterval(() => {
        i--;
        if (i<=0) {
            scroll_line.style.display = 'none';
            clearInterval(timeId);

        }
    }, 1000);
    scroll_line.style.display = 'block';
    let height = e.target.scrollTop * ( cententBox.offsetHeight / centent.clientHeight );
    scroll_line.style.top = height + 'px';
    scroll_tip.style.opacity = '0';
}
    



