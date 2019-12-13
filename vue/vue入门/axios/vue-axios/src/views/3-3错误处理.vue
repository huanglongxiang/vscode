<template>
  <div class="home"></div>
</template>

<script>
//错误处理：请求错误时进行的处理
import axios from "axios";
export default {
  name: "v-4",
  created() {
    //错处处理常见的使用方式
    let instents = axios.create;
    //请求时
    instents.interceptors.request.use(
      res => {
        return res;
      },
      err => {
        //请求错误 一般http状态码以4开头，常见的是 404：找不到  401：超时
        return err;
    });
    //响应时
    instents.interceptors.response.use
    (res=>{
        return res;
    },err=>{
        //响应错误  一般http状态码以5开头，常见的是500 系统错误，502  系统重启  err.responese.status 捕获状态码
        return Promise.reject(err);
    })
    //默认情况下  是以拦截器中声明的错误处理为处理方式  如果有特殊需要，在对请求进行单独处理
    instents.get('/data.json').then(res=>{
        console.log(res)
    }).catch(err=>{
        //这里是 单独对请求出现错误时的处理，
        console.log(Promise.reject(err));
    })

    //取消请求使用方式
    let source = axios.CancelToken.source();
    axios.get('/data.json',{
        cancelToken:source.token
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
    //取消请求，会进入到以上的catch，参数可选
    source.cancel('cancel http')

    //什么请求下会用到？在查询大批量数据，但是没响应，用户想要发起下一个请求时，（正常情况下用不到）
  }
};
</script>
