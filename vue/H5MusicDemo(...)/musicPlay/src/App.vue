<template>
  <div id="app">
    <vTitle :videoToTitleURL="videoToTitleURL"></vTitle>
    <vLeft @videoURL="videoURL"></vLeft>
    <div class="right"></div>
  </div>
</template>

<script>
import vLeft from './components/vLeft'
import vTitle from './components/vTitle'

export default {
  name: "app",
  data() {
    return {
      videoToTitleURL:'',
    }
  },
  components:{
    vLeft,
    vTitle,
  },
  methods: {
    videoURL(url){
      if (url) {
        this.videoToTitleURL = url;
      }
    }
  },
  created() {}
};
</script>

<style>
#app {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  font: 14px "Lucide Grande", Helvetica, Arial, sans-serif;
  background: #fff;
  color: #ccc;
  text-align: center;
}


.right {
  top: 170px;
  right: 10px;
  bottom: 10px;
  left: 220px;
  border: 1px solid #ccc;
}
</style>
