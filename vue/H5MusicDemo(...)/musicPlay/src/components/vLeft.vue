<template>
  <div class="left">
    <div class="txt">
      <input type="text" v-model="inputValue" @keyup.enter="getSongList" />
    </div>
    <ul>
      <li
        v-for="item in videoList"
        :key="item.id"
        v-text="item.name"
        @click="getSonge(item.id)"
        :class="{'selected':flagId == item.id}"
      ></li>
    </ul>
    <!-- <video :src="videoURL" autoplay></video> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      videoList: null,
      flagId: 0,
      inputValue: "",
      searchValue: "",
      songs: {},
      videoURL: null
    };
  },
  methods: {
    //获取单首歌曲
    getSonge(id) {
      this.flagId = id;
      //获取地址
      axios({
        url: "http://183.237.67.218:3000/song/url?id=" + this.flagId
      })
        .then(data => {
          //请求音频数据
          this.videoURL = data.data.data[0].url;
          this.$emit('videoURL',this.videoURL);
        })
        .catch(err => {
          return err;
        });
    },
    //获取歌曲列表
    getSongList() {
      this.searchValue = this.inputValue;
      axios({
        url: "http://183.237.67.218:3000/search?keywords=" + this.searchValue
      }).then(data => {
        this.videoList = data.data.result.songs;
      });
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/left.css");
</style>