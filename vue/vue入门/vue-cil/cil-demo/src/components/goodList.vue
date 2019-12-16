<template>
  <div class="goodList">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.img" />
        <p>{{item.goodName}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "goodList",
  data() {
      let url = '';
     if (this.chilMsgcId == 1) {
        url = "/json/bjb.json";
      } else if (this.chilMsgcId == 2) {
        url = "/json/sj.json";
      }else{
        url = "/json/bjb.json";
      }
      this.$http.get(url).then(res => {
        this.list = res.data;
      });
    return {
      list: []
    };
  },
  props: ["chilMsgcId"],
  watch: {
    chilMsgcId() {
      console.log(this.chilMsgcId);
      let url = "";
      if (this.chilMsgcId == 1) {
        url = "/json/bjb.json";
      } else if (this.chilMsgcId == 2) {
        url = "/json/sj.json";
      }else{
           url = "/json/bjb.json";
      }
      this.$http.get(url).then(res => {
        this.list = res.data;
      });
    }
  }
};
</script>
<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  list-style: none;
  width: 200px;
  height: 200px;
  font-size: 9px;
  color: red;
  margin-bottom: 30px;
}
li img {
  width: 180px;
  height: 180px;
}
</style>