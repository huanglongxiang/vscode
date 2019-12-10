<template>
    <div>
        <p>标题</p>
        <input type="text" v-model="title">
        <p>内容</p>
        <input type="text" v-model="content">
        <button class="btn" @click="add">提交</button>
    </div>
</template>
<script>
import store from '@/store'
export default {
    name:'Add',
    store,
    data() {
        return {
            title:'',
            content:'',
        }
    },
    methods: {
        add(){
            //唯一去改变
            store.commit('addItem',{
                title:this.title,
                content:this.content
            });
            this.title = '';
            this.content ='';
            this.$router.push('/home/list');
        }
    },
}
</script>
<style scoped>
    
</style>