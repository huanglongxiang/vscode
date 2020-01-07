<template>
  <div class="ebook">
    <TitleBar :showHideIndex="showHideIndex"></TitleBar>
    <div class="read-wrapper">
      <!-- 文章主体部分 -->
      <div id="read"></div>
      <!-- 上一页下一页模块 -->
      <div class="leftAndReight">
        <div class="left" @click="prePage"></div>
        <div class="center" @click="showAndhide"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <FooltBar
      :showHideIndex="showHideIndex"
      :defaulFontSize="defaulFontSize"
      :defaulthemeId="defaulthemeId"
      :subjectList="subjectList"
      ref="fooltbar"
      :fontSizeList="fontSizeList"
      @setFontSize="setFontSize"
      @setThemes="setThemes"
      :bookAvailable="bookAvailable"
      @onProgressChange="onProgressChange"
      :navigation="navigation"
      @jumpTo='jumpTo'
    ></FooltBar>
  </div>
</template>

<script>
/* 加载阅读器引擎 */
import Epub from "epubjs";
import TitleBar from "@/components/TitleBar.vue";
import FooltBar from "@/components/FooltBar.vue";
/* 访问电子书 */
const DOWWLOAD_URL = "/static/2018_Book_AgileProcessesInSoftwareEngine.epub";
//向全局变量传入epub
global.epub = Epub;
export default {
  data() {
    return {
      showHideIndex: false, //控制与显示与隐藏
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ], //字体列表
      defaulFontSize: 16, //默认字体
      themes: null, //阅读器对象
      subjectList: [
        {
          name: "default",
          style: {
            body: {
              color: "#000",
              background: "#fff"
            }
          }
        },
        {
          name: "eye",
          style: {
            body: {
              color: "#000",
              background: "#ceeaba"
            }
          }
        },
        {
          name: "night",
          style: {
            body: {
              color: "#fff",
              background: "#000"
            }
          }
        },
        {
          name: "gold",
          style: {
            body: {
              color: "#000",
              background: "rgb(241,236,226)"
            }
          }
        }
      ], //主题样式
      defaulthemeId: 3, //默认主题
      locations: null, //进度条
      bookAvailable: false,
      navigation:null,//目录信息
    };
  },
  components: {
    TitleBar,
    FooltBar
  },
  methods: {
    //电子书的解析与渲染
    showEpub() {
      //生成Book
      this.book = new Epub(DOWWLOAD_URL);
      //生成Rendition,通过Book,renderTo
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
        method: "default"
      });
      //通过Rendtion.display渲染电子书
      this.rendition.display();
      //通过themom来修改字体 将themes保存到本地
      this.themes = this.rendition.themes;
      this.setFontSize(this.defaulFontSize);
      //this.themes.register(name,styles);  //注册样式，这里还没对样式进行加载
      //this.themes.select(name); //加载样式
      this.subjectRegister();
      this.setThemes(this.defaulthemeId);
      //获取Location对象  用来加载进度条，默认情况下是不显示的
      //通过epubjs的钩子函数来实现
      this.book.ready
        .then(() => {
          //将加载状态改为允许加载
          return this.book.locations.generate();
        })
        .then(result => {
          //回调完成后将数据存储到vue对象中  加载所需要的数据
          if (result) {
            //获取目录信息  navigation 可以获取到解析书籍的目录信息
            this.navigation = this.book.navigation;
            this.locations = this.book.locations;
            this.bookAvailable = true;
          }
        });
      //
    },
    //上一页
    prePage() {
      if (this.rendition) {
        //上一页实现
        this.rendition.prev();
        //这里由于存在当进入下一章的时候，会进行一个刷新操作，导致字体被重置，
        //所以，这里再次调用字体设置方法，确保能保存当前字体大小
        this.setFontSize(this.defaulFontSize);
      }
    },
    //下一页
    nextPage() {
      if (this.rendition) {
        //下一页实现
        this.rendition.next();
        //这里由于存在当进入下一章的时候，会进行一个刷新操作，导致字体被重置，
        //所以，这里再次调用字体设置方法，确保能保存当前字体大小
        this.setFontSize(this.defaulFontSize);
      }
    },
    //唤出菜单栏
    showAndhide() {
      this.showHideIndex = !this.showHideIndex;
      if (!this.showHideIndex) {
        //通过ref属性，this.$refs.fooltbar来选择这个DOM元素，可以直接调用子类的方法
        this.$refs.fooltbar.parentLvHide();
      }
    },
    //父子参数传递 设置字体大小
    setFontSize(size) {
      this.defaulFontSize = size;
      if (this.themes) {
        //themes fontSize（）来控制阅读器显示字体
        this.themes.fontSize(size);
      }
    },
    //注册主题样式
    subjectRegister() {
      this.subjectList.forEach(item => {
        this.themes.register(item.name, item.style);
      });
    },
    //渲染主题
    setThemes(index) {
      this.themes.select(this.subjectList[index].name);
      this.defaulthemeId = index;
    },
    //进度条控制  progress 进度条数值
    //cfiFromPercentage 从位置百分比中获取EpubCFI
    //display  定位实现
    onProgressChange(progress) {
      let percentage = progress / 100;
      let location =
        percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0;
      this.rendition.display(location);
    },
    //目录跳转
    jumpTo(href){
      if (href) {
         this.rendition.display(href);
      }
      //隐藏标题菜单，以及所有的一切
      this.hideTitleAndMenu();
    },
    //隐藏全部
    hideTitleAndMenu(){
      //隐藏标题栏，操作选项栏，操作栏内容
      this.showAndhide();
    }
  },
  mounted() {
    //调用方法
    this.showEpub();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/global.scss";
.leftAndReight {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  .left {
    flex: 0 0 px2rem(100);
  }
  .center {
    flex: 1;
  }
  .right {
    flex: 0 0 px2rem(100);
  }
}
</style>