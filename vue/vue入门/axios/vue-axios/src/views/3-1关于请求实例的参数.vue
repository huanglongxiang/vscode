<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "home",
  components: {},
  created() {
      //axios实例化，为了应对多个接口规范而采用的一种方式，可创建多个实例
      let javaAxios = axios.create({
          baseURL:' http://localhost:8080',
          //设置响应时长
          timeout:1000,
      })
      let phpAxios = axios.create({
          //基础地址
          baseURL:' http://localhost:9090',
          //设置响应时长（ms）
          timeout:1000,
          //请求地址
          url:'/data.json',
          //请求方法
          method:'get,put,post,patch,delete',
          //请求头设置
          headers:{
              token:''
          },
          //将请求参数拼接在url上
          params:{},
          //将请求参数放在请求体里
          data:{}
      })
      //引用实例
      javaAxios.get('/data.json').then(res=>{
          console.log(res);
      });
        // 1、全局配置
        axios.defaults.timeout = 2000;
        // 2、实例配置
        phpAxios.defaults.timeout =1000;
        // 3、请求配置
        phpAxios.get('/data.json',{
            timeout:2000
        })
        //优先级 从低到高   全局<实例<请求
  }
};
</script>
