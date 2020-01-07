<template>
  <div class="titleBar">
    <!-- 顶部组件 -->
    <transition name="showTitle">
      <header class="titles" v-show="showHideIndex">
        <div class="t_left">
          <span>
            <i class="iconfont icon-xiangzuo icon"></i>
          </span>
        </div>
        <div class="t_right">
          <ul>
            <li>
              <i class="iconfont icon-yonghu icon"></i>
            </li>
            <li>
              <i class="iconfont icon-gouwuche icon"></i>
            </li>
            <li>
              <i class="iconfont icon-daohanggengduo icon"></i>
            </li>
          </ul>
        </div>
      </header>
    </transition>
  </div>
</template>

<script>
export default {
  name: "titleBar",
  props:{
      showHideIndex:{
          type:Boolean,
          default:false
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";
.titles {
  position: absolute;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  height: px2rem(48);
  display: flex;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  .t_left {
    flex: 0 0 px2rem(60);
    span {
      display: inline-block;
      height: 100%;
    }
  }
  .t_right {
    flex: 1;
    ul {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      li {
        margin-right: 10px;
      }
    }
  }
}
</style>