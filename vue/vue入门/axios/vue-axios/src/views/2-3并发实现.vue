<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
    /* 
        并发请求：同时进行多个请求，并统一处理
        返回值
    */
    name: '2-3并发实现',
    components: {},
    created(){
        /* 
        axios.all()   实现多个请求发送
        axios.spread() 在请求多个接口后，返回数据进行分割处理 */
        axios.all(
            [
                axios.get('/data.json'),
                axios.get('/city.json')
            ]
        ).then(
            /* 这里的参数需要与请求接口相对应 */
            axios.spread((dataRes,cityRes)=>{
                console.log(dataRes,cityRes);
            })
        )
    }
}
</script>
