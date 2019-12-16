<template>
    <div class="Right">
        <div v-if="msgc==1">
            <GoodList :chilMsgcId="msgc"></GoodList>
        </div>
        <div v-else-if="msgc==2">
            <GoodList :chilMsgcId="msgc"></GoodList>
        </div>
        <div v-else>
            <GoodList :chilMsgcId="0"></GoodList>
        </div>
        
    </div>
</template>
<script>
import Msg from './msg.js'
import GoodList from './goodList'

export default {
    data() {
        return {
            msgc:0
        }
    },
    mounted:function(){
        Msg.$on('val',m=>{
            this.msgc = m;
        })
    },
    components:{
        GoodList
    }
}
</script>