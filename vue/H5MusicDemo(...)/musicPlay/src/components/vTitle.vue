<template>
  <header>
    <h1>音乐播放器</h1>
    <input type="range" id="volume" min="0" max="100" value="0" @change="adjustVolume" ref="range" />
    <video :src="videoToTitleURL" autoplay ref="music"></video>
  </header>
</template>
<script>
export default {
  data() {
    return {
      videoMob: null
    };
  },
  props: {
    videoToTitleURL: String
  },
  methods: {
    //控制音量
    adjustVolume() {
      if (!this.videoMob) {
        this.videoMob = this.$refs.music;
      }
      this.videoMob.volume = this.$refs.range.value / 100;
      window.console.log(this.$refs.music.audioTracks)
    }
  },
  mounted() {
    this.$refs.range.value = this.$refs.music.volume * 100;
  }
};
</script>

<style scoped>
header,
.left,
.right {
  position: absolute;
}
header {
  left: 10px;
  top: 10px;
  right: 10px;
  height: 150px;
  border: 1px solid #ccc;
}
header h1 {
  font-size: 40px;
  height: 60px;
  line-height: 60px;
}
header input {
  position: absolute;
  top: 0;
  left: 0;
}
header video {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>