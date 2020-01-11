<template>
    <div>
        <header>
            <h1>音乐播放器</h1>
        </header>
        <div class="left">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            videoList:null,
        }
    },
    comments:{
      
    },
    methods: {
        
    },
    created() {
        axios({
            url:'http://183.237.67.218:3000/search?keywords= '
        }).then(data=>{
            window.console.log(data);
        })
    },
}
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html,body{
        height: 100%;
    }
    body{
        font: 14px 'Lucide Grande',Helvetica,Arial,sans-serif;
        background: #000;
        color: #fff;
        text-align: center;
    }
    header,
    .left,
    .right{
        position: absolute;
    }
    header{
        left: 10px;
        top: 10px;
        right: 10px;
        height: 150px;
        border:1px solid #fff;
    }
    header h1{
        font-size: 40px;
        height: 60px;
        line-height: 60px;
    }
    .left{
        left: 10px;
        top: 170px;
        bottom: 10px;
        width: 200px;
        border: 1px solid #fff;
    }
    .left ul{
        overflow: auto;
    }
    .left ul li{
        height: 30px;
        line-height: 30px;
        cursor: pointer;
    }
    .left ul li.selected{
        color: green;
    }
    .right{
        top: 170px;
        right: 10px;
        bottom: 10px;
        left: 220px;
        border: 1px solid #fff;
    }
</style>