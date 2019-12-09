<template>
    <li @click="liDeleteDate">{{content}}</li>
</template>

<script>
export default {
  props:['content','index'],
  methods: {
    liDeleteDate(){
      this.$emit('delete',this.index);
    }
  },
}
</script>

<!-- 添加“scoped”属性以将CSS限制到此组件-->
<style scoped>

</style>
