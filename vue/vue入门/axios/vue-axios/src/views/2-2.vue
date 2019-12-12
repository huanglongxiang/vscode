<template>
  <div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'home',
  components: {},
  created(){
    /* get */
    axios.get('/data.json',{
      params:{
        id:12
      }
    }).then(res=>{
      console.log(res);
    });
    axios({
      method:'get',
      url:'/data.json',
    }).then(res=>{
      console.log(res);
    })
    /* post */
    axios.post('/post',{
        
    })
  }
}
</script>
