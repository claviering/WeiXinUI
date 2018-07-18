<template>
  <div id="app">
    <weixinHead></weixinHead>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>


import weixinHead from './components/weixin_head/weixin_head.vue';
import tabbar from './components/tabbar/tabbar.vue';

export default {
  name: 'App',
  components: {
    'weixinHead': weixinHead,
    'tabbar': tabbar
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
