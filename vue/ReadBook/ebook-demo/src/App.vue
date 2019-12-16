<template>
  <div id="app">
    <span class="iconfont icon-yonghu"></span>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};

document.addEventListener('DOMContentLoaded',()=>{
  const html = document.querySelector('html');
  let fontSize = window.innerWidth / 10 ;
  fontSize = fontSize > 50 ? 50:fontSize;
  html.style.fontSize = fontSize + 'px';
})
</script>

<style>
@import url("./assets/font/iconfont.css");
</style>
