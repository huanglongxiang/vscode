$(function () {
    let flag = false, flag2 = false;   //控制动画状态
    $('#fullpage').fullpage({
        navigation: true,
        scrollingSpeed: 1200,
        //滚动结束后时调用
        afterLoad: function (anhorLink, index) {
             if (index === 2) {
                 $('.second-screen-content img:eq(0)').animate(
                     {
                         'right': '39%',
                         'opacity': '1'
                     },
                     1000,
                     'easeInOutBack',
                     function () {
                         $('.second-screen-content img:eq(1)').animate(
                             { 'opacity': '1' },
                             1000,
                             function () {
                                 $('.second-screen-content img:eq(0)').hide();
                                 $('.second-screen-content img:eq(1)').hide();
                                 $('.second-screen-content img:eq(2)').show().animate(
                                     {
                                         'width': 150,
                                         'bottom': '90%',
                                         'right': '22%'
                                     },
                                     1000
                                 );
                                 $('.second-screen-content img:eq(3)').show().animate(
                                     {
                                         'bottom': '42%',
                                         'right': '27%',
                                         'width': 441
                                     },
                                     1000
                                 );
                                 $('.second-screen-content img:eq(5)').show().animate(
                                     { 'opacity': '1' },
                                     1000
                                 )
                             }
                         )
                     }
                 )
                 flag = true;
             }
            //  第五屏
             if (index === 5) {
                 let $othis = $('.frive-screen .othiser img');
                 let $mouse = $('.frive-screen .mouse img');
                 $mouse.eq(2).animate(
                     { 'bottom': 0 },
                     1000,
                     function () {
                         $mouse.eq(1).animate(
                             { 'opacity': 1 },
                             1000,
                             function () {
                                 $othis.eq(3).animate(
                                     { 'bottom': 70 },
                                     1000,
                                     function () {
                                         $othis.eq(2).animate(
                                             { 'bottom': 397 },
                                             1000,
                                             function () {
                                                 $othis.eq(0).addClass('dEffects');
                                             }
                                         );
                                     }
                                 );
                             });
                     });
             }
            //  第七屏
            if (index === 7) {
                let div = document.getElementsByClassName('serven-screen')[0];
                let i = 0;
                setInterval(function () {
                    if (i >= 5) {
                        $('.hp').animate({ 'opacity': '1' }, 1000);
                        return;
                    }
                    let left = 667 + (20 * i);
                    let img = document.createElement('img');
                    img.src = './img/t10.png';
                    img.style.position = 'absolute';
                    img.style.bottom = '445px';
                    img.style.left = left + 1 + 'px';
                    img.className = 'move'
                    div.appendChild(img);
                    i++;
                }, 100);
            }
            //第八屏
            if (index === 8) {
                $(document).mousemove(function (e) {
                    let x = e.pageX - $('.eight-screen .other img').eq(1).width() / 2;
                    let y = e.pageY;
                    let mixmove = $(window).height() - $('.eight-screen .other img').eq(1).height();
                    y = y < mixmove ? mixmove : y;
                    $('.eight-screen .other img').eq(1).css({ 'left': x, 'top': y + 10 });


                })
                //悬浮事件
                $('.eight-screen .ksgw').hover(function () {
                    $('.eight-screen .ksgw img').eq(1).css('display','block')
                    $('.eight-screen .ksgw img').eq(0).css('display','none')
                },function(){
                    $('.eight-screen .ksgw img').eq(1).css('display','none')
                    $('.eight-screen .ksgw img').eq(0).css('display','block')
                })

                //再来一次
                $('.eight-screen .other img').eq(0).click(function(){
                    $.fn.fullpage.moveTo(1);
                    $('img,.moves').removeAttr('style');
                    $('.move').remove();
                })
            }
        },
        //开始滚动时调用
        onLeave: function (index, nextIndex, direction) {
            //第二屏
            if (index === 2 && nextIndex === 3 && direction === 'down') {
                let sf = $('.second-screen-content img:eq(6)').get(0);
                let sf2 = $('.third-screen-centent img:eq(2)').get(0);
                let y = -(sf2.offsetTop + sf2.parentNode.offsetTop + sf2.offsetHeight);
                let x = sf2.offsetLeft;
                let width = sf2.offsetWidth, height = sf2.offsetHeight;
                let div = document.createElement('div')
                div.style.width = sf.offsetWidth + 'px';
                div.style.height = sf.offsetHeight + 'px';
                div.style.position = 'absolute';
                div.style.top = sf.offsetTop + 'px';
                div.style.left = sf.offsetLeft - 3 + 'px';
                div.style.backgroundColor = '#fff';
                div.className = 'move';
                sf.parentNode.appendChild(div);
                $('.second-screen-content img:eq(6)').css('opacity', '1').animate(
                    {
                        'bottom': y,
                        'left': x,
                        'width': width,
                        'height': height
                    },
                    2000,
                    function () {
                        $('.second-screen-content img:eq(6)').animate({ 'opacity': 0 }, 1);
                        $('.third-screen-centent img:eq(2)').animate({ 'opacity': 1 }, 10);
                        $('.third-screen-centent img:eq(1)').animate({ 'opacity': 1 }, 1000);
                        $('.third-screen-centent img:eq(4)').animate({ 'opacity': 1 }, 1000);
                    }
                )
            }
            // 第三屏到，四屏过度
            if (index === 3 && nextIndex === 4 && direction === 'down') {
                console.log(index, nextIndex);
                $('.third-screen-centent img:eq(2)').hide();
                let dem = $('.third-screen-centent img:eq(5)').get(0);
                let demsf = $('.payCar img:eq(0)').get(0);
                let y = -(demsf.offsetTop + demsf.parentNode.offsetTop + 50 + demsf.offsetHeight);
                let x = dem.parentNode.offsetWidth / 2 - dem.offsetWidth / 2 + 55;
                $('.third-screen-centent img:eq(5)').css('opacity', '1').animate(
                    {
                        'bottom': y,
                        'left': x
                    },
                    500,
                    'linear',
                    function () {
                        $('.third-screen-centent img:eq(5)').hide();
                        $('.payCar img:eq(0)').css('opacity', '1').animate(
                            { 'bottom': 180 },
                            530,
                            function () {
                                $('.payCar').animate(
                                    {
                                        'left': 2800,
                                    },
                                    1500,
                                    'easeInOutElastic',
                                    function () {
                                        $('.text img:eq(1)').animate({ 'opacity': '1' }, 1000);
                                        $('.receipt').animate({ 'opacity': '1' }, 1000);
                                    }
                                )
                            }
                        );
                    }
                )
                flag2 = true;
            }
            //第五屏到第六屏过度
            if (index === 5 && nextIndex === 6 && direction === 'down') {
                $('.frive-screen .othiser img').eq(3).animate(
                    { 'bottom': 9 }, 300, 'linear', function () {
                        $(this).css('opacity', '0');
                        $('.six-screen .box img').eq(1).css('opacity', '1').animate(
                            { 'bottom': 500, 'height': 85 }, 1000)
                        $('.six-screen .box img').eq(0).animate({ 'left': '23%' }, 1000,
                            function () {
                                $('.six-screen .box img').eq(1).hide();
                                $('.six-screen .box img').eq(0).animate({ 'bottom': 30 }, 1000,
                                    function () {
                                        $(this).hide();
                                        // 车辆前进
                                        $('.six-screen').animate({ 'background-position-x': '100%' }, 3000,
                                            function () {
                                                //门显示
                                                $('.six-screen .girl img').eq(1).show();
                                                // 接收货物
                                                $('.six-screen .car img').eq(2).animate(
                                                    {
                                                        'height': 305,
                                                        'bottom': 116
                                                    },
                                                    1000,
                                                    function () {
                                                        //男孩往左走
                                                        $('.six-screen .car img').eq(2)
                                                            .animate(
                                                                { 'left': '50%' }, 1000,
                                                                function () {
                                                                    $('.six-screen .girl img').eq(0)
                                                                        .animate(
                                                                            { 'height': 294, 'left': '69%', 'opacity': 1 },
                                                                            1000,
                                                                            function () {
                                                                                $('.six-screen .girl img').eq(2)
                                                                                    .css('display', 'block')
                                                                            }
                                                                        )
                                                                }
                                                            )
                                                    }
                                                )
                                            });
                                        //标识显示
                                        $('.six-screen .box img').eq(3)
                                            .animate({ 'left': '36%', 'opacity': 1 }, 2500, 'easeInOutBack');
                                    });
                                //地址显示
                                $('.six-screen .car img').eq(1).css('display', 'block');
                            })
                    }
                );
            }

        }
    });
})