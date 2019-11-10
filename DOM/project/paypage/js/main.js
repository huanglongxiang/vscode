$(function(){
    let flag = false;   //控制动画状态
    $('#fullpage').fullpage({
        navigation:true,
        //滚动结束后时调用
        afterLoad:function(anhorLink,index){
            if (index === 2 && flag === false) {
               $('.second-screen-content img:eq(0)').animate(
                    {
                        'right':'39%',
                        'opacity':'1' 
                    },
                    1000,
                    'easeInOutBack',
                    function(){
                        $('.second-screen-content img:eq(1)').animate(
                            {'opacity':'1'},
                            1000,
                            function(){
                                $('.second-screen-content img:eq(0)').hide();
                                $('.second-screen-content img:eq(1)').hide();
                                $('.second-screen-content img:eq(2)').show().animate(
                                    {
                                        'width':150,
                                        'bottom':'90%',
                                        'right':'22%'
                                    },
                                    1000
                                );
                                $('.second-screen-content img:eq(3)').show().animate(
                                    {
                                        'bottom':'42%',
                                        'right':'27%',
                                        'width':441
                                    },
                                    1000
                                );
                                $('.second-screen-content img:eq(5)').show().animate(
                                    {'opacity':'1'},
                                    1000
                                )
                            }
                        )
                    }
                )
                flag = true;
            }
             //  第五屏
             console.log(index,flag)
             if (index === 5 && flag  === true) {
                let $othis = $('.frive-screen .othiser img');
                let $mouse = $('.frive-screen .mouse img');
                $othis.eq(0).animate({'opacity':1},1000);
                $othis.eq(2).animate({'bottom':397},1000);
                $othis.eq(3).animate({'bottom':70},1000);

                $mouse.eq(2).animate(
                    {'bottom':0},
                    1000,
                    function () {
                        $mouse.eq(1).animate({'opacity':1},1000);
                    });
             }
        
        },
        //开始滚动时调用
        onLeave:function(index,nextIndex,direction){
            //第二屏
            if (index === 2 && nextIndex ===3 && direction === 'down' && flag === true) {
                let sf = $('.second-screen-content img:eq(6)').get(0);
                let sf2 = $('.third-screen-centent img:eq(2)').get(0);
                let y = -(sf2.offsetTop+sf2.parentNode.offsetTop + sf2.offsetHeight);
                let x =  sf2.offsetLeft;
                let width = sf2.offsetWidth,height = sf2.offsetHeight;
                let div = document.createElement('div')
                div.style.width =sf.offsetWidth + 'px';
                div.style.height = sf.offsetHeight + 'px';
                div.style.position = 'absolute';
                div.style.top = sf.offsetTop + 'px';
                div.style.left = sf.offsetLeft -3 + 'px';
                div.style.backgroundColor = '#fff';
                sf.parentNode.appendChild(div);
                $('.second-screen-content img:eq(6)').css('opacity','1').animate(
                    {
                        'bottom':y,
                        'left':x,
                        'width':width,
                        'height':height
                    },
                    2000,
                    function(){
                        $('.second-screen-content img:eq(6)').animate({'opacity':0},1);
                        $('.third-screen-centent img:eq(2)').animate({'opacity':1},10);
                        $('.third-screen-centent img:eq(1)').animate({'opacity':1},1000);
                        $('.third-screen-centent img:eq(4)').animate({'opacity':1},1000);
                    }
                )
            }
            //    第三屏到，四屏过度
            if (index === 3&&nextIndex ===4&&direction === 'down' && flag === true) {
                console.log(index,nextIndex);
                 $('.third-screen-centent img:eq(2)').hide();
                 let dem = $('.third-screen-centent img:eq(5)').get(0);
                 let demsf = $('.payCar img:eq(0)').get(0);
                 let y = -(demsf.offsetTop+demsf.parentNode.offsetTop+ 50+demsf.offsetHeight);
                 let x = dem.parentNode.offsetWidth / 2 - dem.offsetWidth / 2 + 55;
                 $('.third-screen-centent img:eq(5)').css('opacity','1').animate(
                     {
                         'bottom':y,
                         'left': x
                     },
                     500,
                     'linear',
                     function(){
                        $('.third-screen-centent img:eq(5)').hide();
                        $('.payCar img:eq(0)').css('opacity','1').animate(
                            {'bottom':180},
                            530,
                            function () {
                                $('.payCar').animate(
                                    {
                                        'left':2800,
                                    },
                                    1500,
                                    'easeInOutElastic',
                                    function () {
                                        $('.text img:eq(1)').animate({'opacity':'1'},1000);
                                        $('.receipt').animate({'opacity':'1'},1000);
                                    }
                                )
                            }
                        );
                     }
                 )

            }

           

        }
    });
})