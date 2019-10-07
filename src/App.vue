<template>
  <div id="app">
    <h1> 这是app根组件</h1>
    <elent></elent>
    <router-view />
  </div>
</template>
<script>
// 导入子组件
import Elent from './views/index'

export default {
  components: {
    elent: Elent

  }
}
</script>
<style lang="less">
</style>
