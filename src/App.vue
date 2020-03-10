<template>
  <div id="app">
    <NavMenu/>
    <el-collapse-transition>
    <router-view></router-view>
    </el-collapse-transition>
  </div>
</template>

<script>
  import NavMenu from '@/components/content/navmenu/NavMenu'
  export default {
    name: "App",
    components:{
      NavMenu,
    }
  }
</script>

<style scoped>
  @import "assets/css/base.css";

</style>
