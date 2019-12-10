<template>
    <div>
        <form action="" v-if="!isReg">
            <div>用户名：</div> 
            <input type="text" v-model="name">
             <div>密码：</div>
            <input type="text" v-model="password"><br/>
            <button type="button" @click="login">登录</button>
            <button type="button" @click="reg">注册</button>
        </form>
        <form action="" v-else>
             <div>用户名：</div>
            <input type="text" v-model="name">
             <div>密码：</div>
            <input type="password" v-model="password">
             <div>再次输入：</div>
            <input type="password" v-model="affirm"><br/>
            <button type="button" @click="addUser">确定</button>
            <button type="button" @click="cancel">取消</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'Login',
    data() {
        return {
            isReg:false,
            user:'',
            name:'',
            password:'',
            affirm:''
        }
    },
    methods: {
        login(){
            //设置进入页面，路由跳转
            this.$router.push('/home/list');
        },
        reg(){
            //设置进入页面，路由跳转
            this.isReg = true;
        },
        addUser(){
           
            if(this.password === this.affirm){
                localStorage.setItem('name',this.name);
                localStorage.setItem('password',this.password);
                this.name = this.password = this.affirm = '';
            }else{
                alert('两次密码输入不一致请检查');
            }

        },
        cancel(){
            this.isReg = false;
        }
    },
}
</script>
<style scoped>
    
</style>