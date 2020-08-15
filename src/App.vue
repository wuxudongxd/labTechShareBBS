<template>
  <div id="all">
    <NavMenu/>
    <div id="app">
    
      <el-collapse-transition>
        <router-view></router-view>
      </el-collapse-transition>
    </div>
  </div>
  
</template>

<script>
  import NavMenu from '@/views/components/content/navmenu/NavMenu'
  export default {
    name: "App",
    components:{
      NavMenu,
    }
  }
</script>

<style scoped>
  @import "assets/css/base.css";
  #app{
    margin-top: 60px;
    width: 100%;
    height: 100%;
  }
</style>
