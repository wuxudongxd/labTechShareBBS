<template>
  <div class="userBar">
    <el-card shadow="hover">
      <el-button type="info" plain>点击注册</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "UserBar",
    data(){
      return{
        img:null
      }
    }
  }
</script>

<style scoped>
  el-button{
    margin:0 auto;
  }
</style>
