<template>
    <div>
       <ul>
            <li v-for="(item,i) in pagelists" :key="i">
                {{item.title}}-------{{item.content}}
            </li>
       </ul>
    </div>
</template>
<script>
import store from '@/store'
export default {
    name:'List',
    store,
    computed: {
        pagelists(){
            return store.state.lists;
        }
    },
}
</script>
<style scoped>
    
</style>