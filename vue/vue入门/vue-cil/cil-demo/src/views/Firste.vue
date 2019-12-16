<template>
    <div class="main">
        <!-- 左边导航 -->
        <aside class="left">
            <nav class="nav">
               <Left></Left>
            </nav>
        </aside>
        <!-- 左边导航 -->
        <article class="right">
            <aside class="top">
                <img src="img/bg.png" class="bg" alt="">
            </aside>
            <article class="bottom">
                <Right></Right>
            </article>
        </article>
    </div>
</template>

<script>
import Left from '../components/Left'
import Right from '../components/Right'

export default {
    name:'Firste',
    components:{
        Left,
        Right
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
        width: 1200px;
        margin: 20px auto;
        font-size: 0
    }
    .bg{
        width: 1000px;
        height: 200px;
    }
    .left,.right{
        display: inline-block;
        background: #f5f5f5;
        vertical-align: middle;
     
        font-size: 12px;
     }
    .left{
        width: 100px;
        margin-right: 20px;
        
    }
    .nav{
        position: absolute;
        top: 11px;
    }
    .right{
        width: 1000px;
    }
</style>