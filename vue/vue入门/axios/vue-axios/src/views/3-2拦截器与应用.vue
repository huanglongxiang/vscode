<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    
  </div>
</template>

<script>
//拦截器：在请求或响应被处理前拦截他们
import axios from "axios";
export default {
  name: "v-3",
  created() {
      axios.interceptors.request.use(config=>{
          //在请求之前做些什么
          return config
      },err=>{
          //在请求错误的时候做些什么
          return Promise.reject(err);
      })
      //响应拦截器
      axios.interceptors.response.use(res=>{
          //请求成功对响应数据进行数据处理
          return res
      },err=>{
          //响应错误做些什么
          return Promise.reject(err)
      })
      //取消拦截器（了解）
      let interceptors = axios.interceptors.request.use(
          config=>{
              config.headers={
                  auth:true
              }
              return config
        })
        axios.interceptors.request.eject(interceptors);

        //实际开发中的应用  登录状态（token:''）需要登录的接口
        let instance = axios.create({});
        instance.interceptors.request.use(
            config=>{
                //常用形式
                console.headers.token = '';
                return config
        })
        //不需要登录的接口
        let newInstance = axios.create({})

        //移动端开发应用  在请求前将弹框显示，在请求完成后关闭弹框
        let instance_phone = axios.create({});
        instance_phone.interceptors.request.use(config=>{
            $('#modal').show()
            return config
        })
        instance_phone.interceptors
        .response.use(config=>{
            $('#modal').hide()
            return config
        })
  }
};
</script>
