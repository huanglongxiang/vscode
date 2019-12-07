; (function () {
    let LightBox = function () {
        var self = this;
        /* 创建遮罩层和弹出框 */
        this.popupMask = $('<div id="G-lightBox-mask">');
        this.popupWin = $('<div id="G-lightBox-popup">');

        /* 保存body */
        this.bodyNode = $(document.body);

        /* 渲染剩余的DOM，并且插入到body */
        this.renderDOM();

        //获取元素
        this.picView = this.popupWin.find('div.lightBox-pic-view');//弹框
        this.prevBtn = this.popupWin.find('span.lightBox-prev-btn');//前进按钮
        this.nextBtn = this.popupWin.find('span.lightBox-next-btn');//后退按钮
        this.images = this.popupWin.find('img.lightBox-img');        //图片按钮
        this.picCation = this.popupWin.find('div.lightBox-pic-cation');//文本容器
        this.imgText = this.popupWin.find('p.lightBox-pic-desc');//图片标题
        this.imgIndex = this.popupWin.find('span.lightBox-of-index');//图片索引
        this.close = this.popupWin.find('span.lightBox-close-btn');   //关闭按钮


        //准备开发事件委托，获取组数据
        this.groupName = null;
        this.groupData = [];  //放置同一组数据
        this.bodyNode.delegate('.js-lightBox,*[data-role=lightBox]', 'click', function (e) {
            //阻止事件冒泡
            e.stopPropagation();

            //获取当前组名
            var currentGroupName = $(this).attr('data-group');

            //判断当前点击的是否是同一个数值，避免重复执行
            if (currentGroupName != self.groupName) {
                self.groupName = currentGroupName;
                //根据当前组名获取同一组数据
                self.getGroup();
            }

            //初始化弹框
            self.initPopup($(this));

        })

        //关闭弹框
        this.popupMask.click(function () {
            $(this).fadeOut();
            self.popupWin.fadeOut();
        });
        this.close.click(function () {
            self.popupMask.fadeOut();
            self.popupWin.fadeOut();
        })

        //显示左右切换图标
        this.flag = true;//动画执行标识
        this.nextBtn.hover(function () {
            if (!$(this).hasClass('disablet') && self.groupData.length > 1) {
                $(this).addClass('lightBox-next-btn-show');
            }
        }, function () {
            if (!$(this).hasClass('disablet') && self.groupData.length > 1) {
                $(this).removeClass('lightBox-next-btn-show');
            }
        }).click(function(e){
            e.stopPropagation();
            if (!$(this).hasClass('disablet')&&self.flag) {
                self.flag = false;
                self.goto('next');
            }
        });
        this.prevBtn.hover(function () {
            if (!$(this).hasClass('disablet') && self.groupData.length > 1) {
                $(this).addClass('lightBox-prev-btn-show');
            }
        }, function () {
            if (!$(this).hasClass('disablet') && self.groupData.length > 1) {
                $(this).removeClass('lightBox-prev-btn-show');
            }
        }).click(function(e){
            e.stopPropagation();
            if (!$(this).hasClass('disablet')&&self.flag) {
                self.flag = false;
                self.goto('prev');
            }
        })
    };
    //方法集
    LightBox.prototype = {
        //实现向上与向下切换
        goto:function(dir){
            //向下切换
            if (dir === 'next') {
                this.index++;
                //判断是否到达底部
                if (this.index>=this.groupData.length-1) {
                    this.nextBtn.addClass('disablet').removeClass('lightBox-next-btn-show'); 
                }
                //同时监测向上切换是否是第一张
                if (this.index != 0) {
                    this.prevBtn.removeClass('disablet');
                }
                //拿数据并实现下一张图片的切换
                let src = this.groupData[this.index].src;
                this.loadPicSize(src);
            }
            //向上切换
            else if(dir === 'prev'){
                this.index--;
                //逻辑同上
                if (this.index <= 0) {
                    this.prevBtn.addClass('disablet').removeClass('lightBox-prev-btn-show')
                }
                if (this.index != this.groupData.length-1) {
                    this.nextBtn.removeClass('disablet');
                }
                let src = this.groupData[this.index].src;
                this.loadPicSize(src);
            }
        },

        //加载图片大小
        loadPicSize: function (sourceSrc) {
            var self = this;
            //每一次加载图片时都对宽高进行一次初始化，避免第二次继承第一次的宽高
            self.images.css({ width: 'auto', height: 'auto' }).hide();
            self.picCation.hide();

            //判断图片是否加载完成方法
            this.preLoadImg(sourceSrc, function () {
                self.images.attr('src', sourceSrc);
                var width = self.images.width();
                var height = self.images.height();
                //设置弹出层的宽高与图片同步
                self.changePic(width, height);
            });
        },
        //设置弹出层宽高
        changePic: function (width, height) {
            var self = this;
            var winWidth = $(window).width();
            var winHeight = $(window).height();

            //如果图片的宽高大于浏览器视口的宽高比例，就通过比例来对图片与容器宽高进行调整，让其不会溢出视口
            var scale = Math.min(winWidth / (width + 10), winHeight / (height + 10), 1);
            width = width * scale;
            height = height * scale;

            //设置弹框的动画，动态根据传入宽高，更改宽高，实现过多效果
            this.picView.animate({
                width: width - 10,
                height: height - 10
            });
            this.popupWin.animate({
                width: width,
                height: height,
                marginLeft: -(width / 2),
                top: (winHeight - height) / 2,
            }, function () {
                //显示图片信息
                self.images.css({
                    width: width - 10,
                    height: height - 10,
                }).fadeIn();
                self.picCation.fadeIn();
                self.flag = true;//修改动画执行标识
            });
            //设置描述文字和当前索引
            this.imgText.text(this.groupData[this.index].caption);
            this.imgIndex.text('当前索引：' + (this.index + 1) + ' of ' + this.groupData.length);
        },
        //判断图片是否加载完成
        preLoadImg: function (src, callback) {
            var img = new Image();
            if (!!window.ActiveXObject) {
                img.onreadystatechange = function () {
                    if (this.readyState == 'complete') {
                        callback();
                    }
                }
            } else {
                img.onload = function () {
                    callback();
                }
            }
            img.src = src;
        },
        //过度图片
        showMaskAndPopup: function (sourceSrc, currentId) {
            var self = this;

            this.images.hide();
            this.picCation.hide();
            //遮罩层淡出
            this.popupMask.fadeIn();

            var winWidth = $(window).width();
            var winHeight = $(window).height();

            //设置弹框的宽高，当前视口宽高的一半
            this.picView.css({
                width: winWidth / 2,
                height: winHeight / 2
            })
            this.popupWin.fadeIn();

            var viewHeight = winHeight / 2 + 10;

            this.popupWin.css({
                width: winWidth / 2 + 10,
                height: winHeight / 2 + 10,
                marginLeft: -(winWidth / 2 + 10) / 2,
                top: -viewHeight,
            }).animate({
                top: (winHeight - viewHeight) / 2,
            }, function () {
                //动画加载完成之后，需要加载图片
                self.loadPicSize(sourceSrc);
            });
            this.index = this.getIndexOf(currentId);
            /* 为何不用$(this).index方法来获取索引，因为是插件的引入，
                考虑到img会出现同一组内，下一个标签可能不是图片的情
                况，索引就会不匹配，所以采用图片id来进行判断。索引位置
             */
            var groupDataLength = this.groupData.length;
            if (groupDataLength > 1) {
                if (this.index === 0) {
                    this.prevBtn.addClass('disablet');
                    this.nextBtn.removeClass('disablet');
                } else if (this.index === groupDataLength - 1) {
                    this.prevBtn.removeClass('disablet');
                    this.nextBtn.addClass('disablet');
                }
            }


        },
        //获得当前点击图片的索引
        getIndexOf: function (currentId) {
            var index = 0;

            //去数组中查询被点击元素的索引，通过ID来进行对比
            $(this.groupData).each(function (key) {
                index = key;
                if (this.id === currentId) {
                    return false;
                }
            })

            return index;
        },
        //初始化弹框
        initPopup: function (obj) {
            var self = this;
            var sourceSrc = obj.attr('data-source');
            var currentId = obj.attr('data-id');

            this.showMaskAndPopup(sourceSrc, currentId);
        },

        //获取点击的分组
        getGroup: function () {
            var self = this;
            //根据当前的组别名称获取页面中所有相同组别的对象
            var groupList = this.bodyNode.find('[data-group=' + this.groupName + ']');

            //清空数组
            self.groupData.length = 0;

            groupList.each(function () {

                self.groupData.push({
                    src: $(this).attr('data-source'),
                    id: $(this).attr('data-id'),
                    caption: $(this).attr('data-caption')
                })

            })
        },

        //初始化模板
        renderDOM: function () {
            //初始化模板样式
            var strDom = '<div class="lightBox-pic-view">'
                + '<span class="lightBox-btn lightBox-prev-btn"></span>'
                + '<img class="lightBox-img" src="./images/2-2.jpg" alt="">'
                + '<span class="lightBox-btn lightBox-next-btn"></span>'
                + '</div>'
                + '<div class="lightBox-pic-cation">'
                + '<div class="lightBox-caption-area">'
                + '<p class="lightBox-pic-desc">图片标题</p>'
                + '<span class="lightBox-of-index">当前索引：0 of 0</span>'
                + '</div>'
                + '<span class="lightBox-close-btn"></span>'
                + '</div>'

            //插入到this.popupWin中
            this.popupWin.html(strDom);

            //把遮罩层和弹出框插入到body中
            this.bodyNode.append(this.popupMask, this.popupWin);

        }
    };
    //暴露插件
    window['LightBox'] = LightBox;
})(jQuery);