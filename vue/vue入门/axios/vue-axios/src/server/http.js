import axios from 'axios'
import listContent from './ListContent'
import {Toast} from 'vant'

let instents = axios.create({
    baseURL:'http://localhost:9000/api',
    timeout:1000
})
//存放请求方法的容器
const http = {};

for (const key in listContent) {
    let api = listContent[key];   // 存放url  method
    // async 是为了避免回调地狱（需要多次请求，并且一次请求都依赖上一次的数值）需要与 await一起配合使用，
    // 使得代码能够线性往下执行 ，当发生错误时，中断执行  这里很重要
    http[key] = async function(
        params,  //请求参数  get:  url ,put,post,patch(data)   delete:url
        isFormData = false, //标识是否时formData类型的请求
        config={}//配置参数
    ){
        let newParams = {};//用来判断是否是formdata类型的请求，如果是，进行遍历存放

        //content-type是否是formdata的判断
        if (params && isFormData) {
            //如果是formdata属性，那么就对属性进行遍历
            newParams = new FormData();
            //遍历形参FormData
            for (let i in params) {
               newParams.append(i,params[i]);
            }
        }else{
            //如果不是，直接赋值
            newParams = params;
        }

        let res = {};//请求返回值
        if (api.method == 'put' || api.method == 'post' || api.method == ' patch') {
            try {
                //处理请求
                res = await instents[api.method](api.url,newParams,config);
            } catch (error) {
                res = error;
            }
        }else if(api.method == 'delete' || api.method == 'get'){
            //将ID直接拼接到url后面
            config.params = newParams;
            try {
                //处理delete请求
                res = await instents[api.method](api.url,config);
            } catch (error) {
                res = error;
            }
        }
        return res; //返回响应值
    }
}

//拦截器请求封装  响应时
instents.interceptors.request.use(res=>{
    //发起请求时，需要完成的事(mask : 是否显示阴影, duration : 一直存在，forbidClick：禁止点击，message：显示文本)
    Toast.loading({     //执行在加载时应该展示的样式
        mask:false,        
        duration:0,         
        forbidClick:true , 
        message:'加载中...'
    })
    return res
},()=>{
    //请求错误时
    Toast.clear();
    Toast("请求失败，请稍后再试");
});
//请求时
instents.interceptors.response.use(res=>{
    Toast.clear();
    return res.data;
},()=>{
    Toast.clear();
    Toast("请求失败，请稍后再试");
})

export default http;


