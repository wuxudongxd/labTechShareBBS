<template>
  <div class="userBar">
    <el-button type="info" plain>点击注册</el-button>
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
  .userBar{
    padding: 10px;
    background-color: #E4E7ED;
  }
  el-button{
    margin:0 auto;
  }
</style>
