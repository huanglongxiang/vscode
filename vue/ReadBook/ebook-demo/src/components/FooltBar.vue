<template>
  <div class="fooltBar">
    <!-- 下方列表 操作栏 -->
    <transition name="showFooter">
      <footer
        class="footer"
        v-show="showHideIndex"
        :class="{'deleteShowe':isShow|| !showHideIndex}"
      >
        <ul>
          <li @click="showPlan(3)">
            <i class="icon icon-RectangleCopy iconfont"></i>
          </li>
          <li @click="showPlan(2)">
            <i class="icon icon-taiyang iconfont"></i>
          </li>
          <li @click="showPlan(1)">
            <i class="icon icon-circle iconfont"></i>
          </li>
          <!-- 控制字体 -->
          <li @click="showPlan(0)">
            <i class="icon">A</i>
          </li>
        </ul>
      </footer>
    </transition>
    <!-- 字体，主题，进度弹出栏 -->
    <transition name="showFooter">
      <div class="fontSystem" v-show="isShow">
        <!-- 字体控制 -->
        <div class="fontSys" v-if="isNum==0">
          <div class="fs_left" :style="{fontSize:fontSizeList[0].fontSize+'px'}">A</div>
          <!-- 选择字体大小 -->
          <div class="plan">
            <div
              class="fs_content"
              @click="choiceFontSize(item.fontSize)"
              v-for="(item,index) in fontSizeList"
              :key="index"
            >
              <div class="fsc_line"></div>
              <div class="fsc_content">
                <!-- 滚动条 -->
                <div class="fs_scroll" v-if="defaulFontSize == item.fontSize">
                  <div class="fs_scroll_small"></div>
                </div>
              </div>
              <div class="fsc_line"></div>
            </div>
          </div>
          <div
            class="fs_right"
            :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize +'px'}"
          >A</div>
        </div>
        <!-- 主体设置 -->
        <div class="themeBox" v-else-if="isNum==1">
          <div
            class="pattern"
            v-for="(item,index) in subjectList"
            :key="index"
            @click="selectTheme(index)"
          >
            <div class="colorBar" :style="{background:item.style.body.background}"></div>
            <span class="colorText" :class="{'active':defaulthemeId==index}">{{item.name}}</span>
          </div>
        </div>
        <!-- 进度条控制 -->
        <div class="progress" v-else-if="isNum==2">
          <div class="progress-wrapper">
            <!-- 
              h5中的进度条属性设置 
              @change:搜索时需要调用的事件
              $event.target.value，获取这个标签的值
              @input:控制百分比的事件
              progress:进度条的默认值
              disabled:控制进度条什么时候不可用
            -->
            <input
              type="range"
              class="a_progress"
              max="100"
              min="0"
              step="1"
              @change="onProgressChange($event.target.value)"
              @input="onProgressInput($event.target.value)"
              :value="progress"
              :disabled="!bookAvailable"
              ref="progress"
            />
          </div>
          <!-- 进度条下方的数值显示 -->
          <div class="text-wrapper">
            <span>{{bookAvailable?progress+'%':'加载中'}}</span>
          </div>
        </div>
      </div>
    </transition>
    <!-- 目录组件 -->
    <transition name="catalogLeft">
      <Catalog v-show="isCatalog" 
      :navigation="navigation"
      :bookAvailable="bookAvailable"
      @jumpTo="jumpTo"></Catalog>
    </transition>
    <!-- 目录弹出栏 -->
   <transition name="fade"> 
      <div class="catalogbg" v-show="isCatalog" @click="showPlan(3)" ref="Catalog"></div>
    </transition> 
  </div>
</template>

<script>
import Catalog from "@/components/Catalog.vue";
export default {
  name: "fooltBar",
  components: {
    Catalog
  },
  data() {
    return {
      isShow: false,
      isNum: 1,
      progress: 0,
      isCatalog: false
    };
  },
  props: {
    showHideIndex: {
      //显示隐藏控制区域
      type: Boolean,
      default: false
    },
    fontSizeList: Array, //接收传入字体集合
    defaulFontSize: Number, //接收默认字体
    subjectList: Array, //主题集合
    defaulthemeId: Number, //默认主题，选中主题
    bookAvailable: Boolean, //传入是否加载完成的判定
    navigation: Object //目录集合
  },
  methods: {
    //通用方法
    showPlan(index){
      if (index == 3) {
        this.isShow = false;
        this.isCatalog = !this.isCatalog;
        if (!this.isCatalog) {
           this.$emit('jumpTo');
        }
      }else{
        this.isShow = true;
        this.isNum = index;
      }
    },
    //给父级调用的方法
    parentLvHide() {
      this.isShow = false;
      this.isCatalog = false;
    },
    //设置字体大小
    choiceFontSize(size) {
      this.$emit("setFontSize", size);
    },
    //选择主题
    selectTheme(id) {
      this.$emit("setThemes", id);
    },
    //拖动进度条时触发事件
    onProgressInput(progress) {
      this.progress = progress;
      this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`;
    },
    //进洞条松开后触发事件，根据进度条数值跳到指定位置
    onProgressChange(progress) {
      this.$emit("onProgressChange", progress);
    },
    //向父组件传递jumpTo
    jumpTo(target){
      this.$emit('jumpTo',target);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  height: px2rem(48);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  ul {
    display: flex;
    justify-content: space-around;
    height: 100%;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon-taiyang {
      font-size: px2rem(30);
    }
  }
}
.fontSystem {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  width: 100%;
  height: px2rem(60);
  background-color: #fff;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  display: flex;
  @include center;
  /*  字体大小控制样式*/
  .fontSys {
    flex: 1;
    display: flex;
    .fs_left,
    .fs_right {
      height: 100%;
      flex: 0 0 px2rem(40);
      @include center;
    }
    .fs_left {
      justify-content: flex-end;
    }
    .fs_right {
      justify-content: flex-start;
    }
    .plan {
      flex: 1;
      display: flex;
      position: relative;
      z-index: 1;
      .fs_content {
        flex: 1;
        display: flex;
        align-items: center;
        .fsc_line {
          flex: 1;
          height: 0;
          border-bottom: px2rem(1) solid #ccc;
        }
        .fsc_content {
          flex: 0 0 0;
          width: 0;
          height: px2rem(7);
          border-left: px2rem(1) solid #ccc;
          position: relative;
          /* 滚动条 */
          .fs_scroll {
            width: px2rem(20);
            height: px2rem(20);
            border: px2rem(1) solid #ccc;
            border-radius: 50%;
            position: absolute;
            background: #fff;
            left: px2rem(-13);
            top: px2rem(-8);
            box-shadow: 0 px2rem(3) px2rem(3) #ccc;
            z-index: 2;
            @include center;
            .fs_scroll_small {
              width: px2rem(6);
              height: px2rem(6);
              background-color: #030303;
              border-radius: 50%;
            }
          }
        }
        &:first-child {
          .fsc_line {
            &:first-child {
              border-bottom: none;
            }
          }
        }
        &:last-child {
          .fsc_line {
            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
  //主题选择控制样式
  .themeBox {
    width: 100%;
    height: 100%;
    display: flex;
    .pattern {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: px2rem(5);
      box-sizing: border-box;
      .colorBar {
        flex: 1;
        height: 100%;
        border: px2rem(1) solid #ccc;
      }
      .colorText {
        flex: 0 0 px2rem(20);
        color: #ccc;
        font-size: px2rem(14);
        @include center;
      }
      .active {
        color: #333;
      }
    }
  }
  //进度条样式
  .progress {
    position: relative;
    width: 100%;
    height: 100%;
    .progress-wrapper {
      width: 100%;
      height: 50%;
      @include center;
      padding: 0 px2rem(30);
      box-sizing: border-box;
      .a_progress {
        width: 100%;
        /* 覆盖默认样式 */
        -webkit-appearance: none;
        height: px2rem(2);
        /* 设置两种颜色，用来控制拖动时左边进度颜色对整体颜色的覆盖 */
        background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
        /* 动态设置第一个数值，来实现覆盖效果 */
        background-size: 0 100%;
        /* 焦点获取，可以理解为当input标签被点击的时候 */
        &:focus {
          outline: none;
        }
        /* 通过伪类实现自定义手柄 */
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: px2rem(20);
          width: px2rem(20);
          border-radius: 50%;
          background: white;
          box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, 0.15);
          border: px2rem(1) solid #ddd;
        }
      }
    }
    .text-wrapper {
      span {
        display: block;
        @include center;
        font-size: px2rem(12);
        text-align: center;
      }
    }
  }
}
.deleteShowe {
  box-shadow: none;
}
.catalogbg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 9;
}
</style>