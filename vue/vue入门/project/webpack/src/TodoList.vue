<template>
  <div>
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
    <ul>
        <v-tolist v-for="(itme,index) in Lilist"
          :key="index"
          :content="itme"
          @delete="removeIndex"
        ></v-tolist>
    </ul>
  </div>
</template>

<script>
import liTemplate from './components/HelloWorld.vue';
export default {
  data() {
    return {
      msg:'',
      Lilist:[]
    }
  },
  components:{
    'v-tolist':liTemplate
  },
  methods: {
    add(){
      alert(this.msg);
      this.Lilist.push(this.msg);   
      this.msg ='';   
    },
    removeIndex(index){
      this.Lilist.splice(index,1);
    }
  },
}
</script>

<style>

</style>
