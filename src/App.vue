<template>
  <div>
    <NavMenu/>
    <div id="app">
    
    <el-collapse-transition>
      <router-view></router-view>
    </el-collapse-transition>
  </div>
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
  #app{
    margin-top: 60px;
    width: 100%;
    height: calc(100vh - 60px);
    overflow-y:scroll;
  }
</style>
