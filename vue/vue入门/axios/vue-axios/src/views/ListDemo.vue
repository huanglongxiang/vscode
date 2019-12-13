<template>
  <div class="ListDemo">
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
import {Button} from 'vant'

export default {
  name: 'ListDemo',
  components: {
      /* 引入 vant组件 */
      [Button.name]:Button
  },
  created(){}
}
</script>
