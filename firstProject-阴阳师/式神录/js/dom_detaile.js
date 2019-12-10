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
        nav: [
            '首屏',
            '传记',
            '情报',
            '攻略',
            '同人',
            '评论',
            '式神录首页'
        ],
        txt: [
            '呵呵，人类总是把誓言和承诺挂在嘴边。',
            '如果你真的如你所起誓的那样，那就先和我一起下黄泉吧',
            '。',
            '不，我不是开玩笑，我是认真的哦。我有说过自己是人类',
            '吗，看来你是误会了什么呢 ~  ~ ',
            '我住在黄泉的河岸，那里有一片彼岸花海。从春天到夏天',
            '，从秋天到冬天，四季盛开的花朵，就像火焰一样，染红',
            '了整个河川。那可真是十分壮观的景象呢 ~  ~ 不',
            '过人们只有在死后，才能看到这盛况了。'
        ],
        shuxin: [
            { 'className': 'attack', 'txt': '攻击' },
            { 'className': 'life', 'txt': '生命' },
            { 'className': 'defence', 'txt': '防御' },
            { 'className': 'speed', 'txt': '速度' },
            { 'className': 'baoji', 'txt': '暴击' },
            { 'className': 'baoshang', 'txt': '暴击伤害' },
            { 'className': 'mingzhong', 'txt': '效果命中' },
            { 'className': 'opposite', 'txt': '效果抵抗' }
            // ','生命','防御','速度','暴击','暴击伤害','暴击伤害','效果命中','效果抵抗'
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
        share: [
            { iconfont: 'icon-weixin-copy', txt: '微信' },
            { iconfont: 'icon-yixin', txt: '易信' },
            { iconfont: 'icon-xinlangweibo', txt: '新浪微博' },
            { iconfont: 'icon-icons-', txt: '空间' }
        ],
        srclist: [
            '[yys.163.com][626]288.png',
            '[yys.163.com][253]288.png',
            '[yys.163.com][586]288-4.png'
        ],
        navclasslist: [
            'top_bar',
            'section1',
            'section2',
            'section3',
            'section4',
            'section5',
            'section6'
        ],
        skilllist: [
            {
                'src': '[yys.163.com][17]2881.png', 'txt': '死亡之花', 'xq':
                {
                    'h3': '死亡之花',
                    'centent': '用殷红的花瓣攻击敌方目标，造成攻击100%伤害。',
                    'result1': 'Lv.2伤害增加至105%',
                    'result2': 'Lv.3伤害增加至110%',
                    'result3': 'Lv.4伤害增加至115%',
                    'result4': 'Lv.5伤害增加至125%'
                }
            },
            {
                'src': '[yys.163.com][453]2882.png', 'txt': '赤团华', 'xq':
                {
                    'h3': '赤团华',
                    'centent': '唯一效果。花海中的敌方，在回合开始时，每层花海对其造成攻击39%伤害。自身生命比例100%、75%、50%、25%时，花海上限为3、4、5、6层；回合开始时自动减少1层花海，最少不低于1层。' +
                        '生命比例每降低25%，获得1层花海及『血之花海』的护盾。' +
                        '先机：创造3层花海，包围敌方全体。',
                    'result1': 'Lv.2每层花海伤害增加至41%',
                    'result2': 'Lv.3每层花海伤害增加至43%',
                    'result3': 'Lv.4每层花海伤害增加至45%',
                    'result4': 'Lv.5每层花海伤害增加至48%'
                }
            },
            {
                'src': '[yys.163.com][165]2883.png', 'txt': '血之花海', 'xq':
                {
                    'h3': '血之花海',
                    'centent': '获得2层花海。' +
                        '若生命比例低于75%，获得不可驱散的护盾，能吸收20%已损失生命的伤害，持续2回合。',
                    'result1': 'Lv.2护盾吸收量增至已损失生命的22%',
                    'result2': 'Lv.3护盾吸收量增至已损失生命的24%',
                    'result3': 'Lv.4护盾吸收量增至已损失生命的26%',
                    'result4': 'Lv.5护盾吸收量增至已损失生命的28%'
                }
            },
        ],
        fanFiction: [
            {
                'scr': '[yys.163.com][308]83c2d8f1-0dde-4682-9b32-c42c2b9ad182.jpg',
                'txt': '弥生朝凪'
            },
            {
                'scr': '[yys.163.com][469]082441c5-f1c3-4c39-95e7-a36aa494518d.jpg',
                'txt': '玖零无心是个鸽子'
            },
            {
                'scr': '[yys.163.com][697]47593a7d-0aae-45e5-81b4-6d216467737b.jpg',
                'txt': '六六的六LL'
            },
            {
                'scr': '[yys.163.com][738]10954e2d-705b-42b1-9b4a-60e9dc2e7fbd.jpg',
                'txt': 'Kori桑'
            },
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
        index: 1,
        timeid: null,
        nextAndProv:0,
    },
    methods: {
        // 点击切换动画
        triget(e) {
            let t = e.target;
            let a = t.children[0];
            let chil = t.parentNode.children;
            for (let i = 0; i < chil.length; i++) {
                chil[i].className = chil[i].className.replace(/\s*cur\s*/, "")
                chil[i].children[0].className = "";
            }
            a.className = "show";
            t.className = (t.className + " cur");
            let imgs = document.getElementById('srcImg').children;
            for (let i = 0; i < chil.length; i++) {
                if (/\s*cur\s*/.test(chil[i].className)) {
                    /* 图像组动画 */
                    // 第一张图离场动画i
                    for (let i = 0; i < imgs.length; i++) {
                        imgs[i].style.opacity = "0";
                        imgs[i].style.transition = "all 1s ease";
                    }
                    //第二张图进场动画
                    let srcImg = document.getElementById('srcImg').children[i];
                    srcImg.style.opacity = "1";
                    srcImg.style.transition = "all 1s ease";
                    /* 按钮动画 */
                    chil[i].style.transition = "all 1s ease";
                    chil[i].children[0].style.transition = "all .5s ease";
                    break;
                }
            }
        },
        /* 描点动画 */
        anchor(e, i) {
            let a = e.currentTarget;
            let id = a.id.split('#')[1];
            let top = document.getElementById(id).offsetTop;
            let steep = top < scrollY ? (-50) : 50;
            if (i == 6) {
                a.href = "../page/ssl-index.html";
            }
            document.removeEventListener('scroll', scrolls, false);
            colorCut(i);
            if (this.timeid) {
                clearInterval(this.timeid);
            }
            this.timeid = setInterval(() => {
                if (Math.abs(top - scrollY) < Math.abs(steep)) {
                    document.addEventListener('scroll', scrolls, false);
                    this.flag = true;
                    clearInterval(this.timeid);
                } else {
                    scrollTo(0, scrollY + steep);
                }
            }, 15);
        },
        /* 移入移出 */
        turnColor(e) {
            if (!e.target.parentNode.className) {
                e.target.children[0].style.borderColor = '#3f979d';
                e.target.children[1].style.color = '#3f979d';
                e.target.children[0].children[0].style.display = "block";
            }
        },
        /* 移出事件处理 */
        removeColor(e) {
            if (!e.target.parentNode.className) {
                e.target.children[0].style.borderColor = '#ccc';
                e.target.children[1].style.color = '#ccc';
                e.target.children[0].children[0].style.display = "none";
            }

        },
        /* 传记数据处理 */
        txtUpdata(e) {
            this.txt = [];
            let a = e.target;
            let id = a.getAttribute('txt_id');
            switch (id) {
                case '0':
                    this.txt.push('呵呵，人类总是把誓言和承诺挂在嘴边。');
                    this.txt.push('如果你真的如你所起誓的那样，那就先和我一起下黄泉吧');
                    this.txt.push('。');
                    this.txt.push('不，我不是开玩笑，我是认真的哦。我有说过自己是人类');
                    this.txt.push('吗，看来你是误会了什么呢 ~  ~ ');
                    this.txt.push('我住在黄泉的河岸，那里有一片彼岸花海。从春天到夏天');
                    this.txt.push('，从秋天到冬天，四季盛开的花朵，就像火焰一样，染红');
                    this.txt.push('了整个河川。那可真是十分壮观的景象呢 ~  ~ 不');
                    this.txt.push('过人们只有在死后，才能看到这盛况了。');
                    break;
                case '1':
                    this.txt.push('害怕了吗 ？ ');
                    this.txt.push('不过这也是自然的吧，人类啊，既怕 ﹁ 死亡 ﹂ 、');
                    this.txt.push('。');
                    this.txt.push('又怕 ﹁ 妖怪 ﹂ ，是非常软弱的生物。');
                    this.txt.push('但是我曾经认识一个人，他可是和其他人类不一样。');
                    this.txt.push('是的，那是个又勇敢、又坚忍的人类。他对我起誓，他毫');
                    this.txt.push('不畏惧，最后也和我一起，去了黄泉，看到了那片美丽的');
                    this.txt.push('花海。');
                    break;
                case '2':
                    this.txt.push('你问那个人现在在哪里吗 ？ ')
                    this.txt.push('呵呵 ~  ~ 对了，你看不见他。')
                    this.txt.push('他就在这里——在我的身体里哦。他成为了我的花泥，变')
                    this.txt.push('成了我的养分，流入我的身体，给我提供了源源不断的能')
                    this.txt.push('量。那真是个意志坚定的人呢 ~  ~ ')
                    this.txt.push('嗯 ？ 你怎么不说话了 ~  ~ 呵呵，你也想成为')
                    this.txt.push('我的养分吗 ？ ')
                    break;
                case '3':
                    this.txt.push('我是开在三途川河畔的花。没有四肢，没有眼睛，依靠生')
                    this.txt.push('长在地面的花朵窥探外面的世界。')
                    this.txt.push('外面的世界也是一片黑暗，偶尔会有迷路的亡魂路过这里')
                    this.txt.push('，我就会伸出茎叶，将他们拖到我的身边，把他们变成花')
                    this.txt.push('泥，为我提供养分。')
                    this.txt.push('起初我小心翼翼，尽可能在四下寂静不被察觉的时候捕捉')
                    this.txt.push('猎物。很快，我就意识到这份谨慎是多余的，主宰冥界的')
                    this.txt.push('那位，似乎并不把我放在眼里。于是我顺从自己的欲望，')
                    this.txt.push('将花枝伸展到更远更远的地方去。我飞速强大起来，根系')
                    this.txt.push('结成有力的毒网，花朵交织直到三途川也染上我的红色，')
                    this.txt.push('倒影出我的模样——四肢修长，身姿窈窕，还有一双赤红')
                    this.txt.push('色的眼睛。')
                    this.txt.push('我是多么美丽的花啊。')
                    break;
                default:
                    break;
            }
            let maxWith = document.querySelector('.zhuanji_txt_container').offsetWidth;
            let showScroll = document.querySelector('.chinese').offsetWidth * this.txt.length;
            if (!/\s*cur\s*/.test(a.className)) {
                a.parentNode.querySelectorAll('a').forEach(element => {
                    element.className = 'zj-btn';
                });
                a.className = 'zj-btn cur';
            }
            if (showScroll > maxWith) {
                document.querySelector('.zhuanji_txt_wrap').style.width = showScroll + "px";
            } else {
                document.querySelector('.zhuanji_txt_wrap').style.width = 'auto';
            }
        },
        /* 技能显示与隐藏 */
        showShill(e) {
            let li = e.target.parentNode;
            let skillInfo = li.querySelector('.skill_info');
            skillInfo.style.opacity = '1';
        },
        hideShill(e) {
            let li = e.target.parentNode;
            let skillInfo = li.querySelector('.skill_info');
            skillInfo.style.opacity = '0';
        },
        /* 底部轮播图实现*/
        carouse(e){
            let nextOrPrev = e.target.className;
            let steep = 0;
            let photoWidth = document.getElementById('carouses').offsetWidth;
            let ul = document.getElementById('carouses').querySelector('.pic_btn_container');
            let li = ul.children;
            let num =Math.floor(li.length % 7 == 0 ? li.length / 7 : (li.length / 7) + 1) ;   
           
            if (this.timeid) {
                clearInterval(this.timeid);
            }
            /* 向右移动 */
            if (/\s*next\s*/.test(nextOrPrev)) {
                steep = -100;
                if (this.nextAndProv == num-1) {
                    this.nextAndProv = num;
                    return;
                }
                this.nextAndProv = this.nextAndProv + 1;
                /* 目标地点 */
                let moveRight =  ((li[0].offsetWidth+20)*7) * this.nextAndProv;
                this.timeid = setInterval(() => {
                    if (moveRight-Math.abs(ul.offsetLeft)>Math.abs(steep)) {
                        ul.style.left = (ul.offsetLeft+steep)+'px';
                    }else{
                        ul.style.left = -moveRight+'px';
                        clearInterval(this.timeid);
                    }
                }, 15);
            }
            /* 向左移动 */            
            else if (/\s*prev\s*/.test(nextOrPrev)) {
                steep = 100;
                if (this.nextAndProv == 0) {
                    return;
                }
                this.nextAndProv = this.nextAndProv - 1;
                /* 目标地点 */
                let moveRight = ((li[0].offsetWidth+20)*7) * this.nextAndProv;
                this.timeid = setInterval(() => {
                    if (Math.abs(ul.offsetLeft)-moveRight > Math.abs(steep)) {
                        console.log(this.nextAndProv,moveRight,ul.style.left,ul.offsetLeft+steep,Math.abs(moveRight-ul.offsetLeft));
                        ul.style.left = (ul.offsetLeft+steep)+'px';
                    }else{
                        ul.style.left = -moveRight+'px';
                        clearInterval(this.timeid);
                    }
                }, 15);
            }
        },
        /* 同人社区弹出动画效果*/
        popupPhoto(e){
            
        }
    },

})
//导航栏显示动画
let nav = document.getElementById('nav');
let section = [
    document.getElementById('section1').offsetTop,
    document.getElementById('section2').offsetTop,
    document.getElementById('section3').offsetTop,
    document.getElementById('section4').offsetTop,
    document.getElementById('section5').offsetTop,
    document.getElementById('section6').offsetTop,
]
document.addEventListener('scroll', scrolls, false);
/* 根据移动距离来改变导航距离 */
function scrolls(e) {
    if (window.scrollY > 250) {
        nav.style.opacity = '1';
        nav.style.transition = 'all 1s ease';
        if (section[0] - 300 < scrollY && scrollY < section[1] - 300) {
            colorCut(1)
        } else if (section[1] - 300 < scrollY && scrollY < section[2] - 300) {
            colorCut(2)
        } else if (section[2] - 300 < scrollY && scrollY < section[3] - 300) {
            colorCut(3)
        } else if (section[3] - 300 < scrollY && scrollY < section[4] - 300) {
            colorCut(4)
        } else if (section[4] - 300 < scrollY && scrollY < section[5] - 300) {
            colorCut(5)
        }
    } else {
        nav.style.opacity = '0';
        nav.style.transition = 'all 1s ease';
    }
}
/* 改变导航颜色 */
function colorCut(index) {
    for (let i = 0; i < nav.children.length; i++) {
        nav.children[i].children[0].children[0].style.borderColor = "#ccc";
        nav.children[i].children[0].children[1].style.color = "#ccc";
        nav.children[i].children[0].children[0].children[0].style.display = "none";
        nav.children[i].className = '';
    }
    nav.children[index].children[0].children[0].children[0].style.display = "block";
    nav.children[index].children[0].children[0].style.borderColor = "#3f979d";
    nav.children[index].children[0].children[1].style.color = "#3f979d";
    nav.children[index].className = 'active';
}
/* 加载更多式神，根据式神多少改变容器宽度 */
window.onload = function () {
    let ul = document.querySelector('.pic_btn_container');
    let li = ul.children;
    let num =Math.floor(li.length % 7 == 0 ? li.length / 7 : (li.length / 7) + 1) ;   
    ul.style.width = num * (ul.parentNode.offsetWidth) +'px';
}


