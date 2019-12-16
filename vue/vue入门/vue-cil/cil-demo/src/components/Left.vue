<template>
    <div class="left">
        <nav>
            <h2 class="title">热门推荐</h2>
            <ul class="nav">
                <li @click="mun1">笔记本电脑</li>
                <li @click="mun2">手机</li>
                <li>服饰</li>
                <li>手表</li>
                <li>书籍</li>
                <li>玩具</li>
                <li>小家电</li>
                <li>学习用品</li>
                <li>办公用品</li>
                <li>旅游必备</li>
                <li>游戏卡通</li>
            </ul>
        </nav>
    </div>
</template>
<script>
/* 事件总线，本质，声明公共应用，之后直接引用 */
import Msg from './msg'
export default {
    methods:{
        mun1(){
            Msg.$emit('val','1');
        },
        mun2(){
            Msg.$emit('val','2');
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .title{
        color: red;
        font-weight: normal;
        margin: 0;
    }
    .nav{
        margin: 0;
        padding: 0;
      
    }
    .nav li{
        height: 50px;
        text-align: center;
        list-style: none;
        font-size: 15px;
        line-height: 50px;
        background: #fff;
        margin-bottom: 2px;
        cursor: pointer;
    }
</style>