<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    axios.get('/data.json',{
      params:{
        id:12
      }
    }).then(res=>{
      console.log(res);
    });
    axios.get({
      method:'get',
      url:'/data.json',
      params:{
        id:12
      }
    }).then(res=>{
      console.log(res);
    })
  }
}
</script>
