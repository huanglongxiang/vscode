<template>
  <div id="app">
    <Ebook msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Ebook from "./Ebook";

export default {
  name: "app",
  components: {
    Ebook
  }
};
//设置REM的值
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
