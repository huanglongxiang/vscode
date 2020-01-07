<template>
    <div class="catalog">
        <div class="content" v-if="bookAvailable">
        <h3>目录</h3>
        <ul>
            <li v-for="(item,index) in navigation.toc" 
            :key="index"
            @click="jumpTo(item.href)">
                {{item.label}}
            </li>
        </ul>
        </div>
        <div class="" v-else>加载中...</div>
    </div>
</template>

<script>
export default {
  name: "catalog",
  props:{
      bookAvailable:Boolean,
      navigation:Object,
  },
  methods:{
      jumpTo(target){
          this.$emit('jumpTo',target);
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";
.catalog{
  width: 70%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
    h3,.empty{
        font-size: px2rem(25);
        letter-spacing:px2rem(10);
        text-align: center;
        margin: px2rem(10);
        color: #333;
    }
    ul{
        li{
            width: 90%;
            box-sizing: border-box;
             font-size: px2rem(15);
             padding: px2rem(10);
             margin: 0 auto;
             color: #ccc;
             border-bottom: px2rem(1) solid #f0f0f0;
        }
    }
}
</style>