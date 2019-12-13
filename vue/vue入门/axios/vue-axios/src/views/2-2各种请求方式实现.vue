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
    let data = '/data.json';
    /* get 两种提交方式*/
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
    /* post  的两种方式*/
    axios.post('/post',data).then(res=>{
        console.log(res);
    });
    axios({
        method:'post',
        url:'/post',
        data:data
    }).then(res=>{
        console.log(res);
    })
    //form-data请求提交
    let formData = new formData();
    for (let key in data) {
        formData.append(key,data[key]);
    }
    axios.post('/post',formData).then(res=>{
        console.log(res);
    })

    //put请求
    axios.put('/put',data).then(res=>{
        console.log(res);
    })

    //patch请求
    axios.patch('/patch',data).then(res=>{
        console.log(res);
    })

    //delete请求  非url传输
    axios.delete('/delete',{
        params:{
            id:12
        }
    }).then(res=>{
        console.log(res);
    })
    //  url传输
    axios.delete('/delete',{
        data:{
            id:12
        }
    }).then(res=>{
        console.log(res);
    })
    axios({
        method:'delete',
        url:'/delete',
        params:{},
        data:{}
    }).then(res=>{
        console.log(res);
    })
  }
}
</script>
