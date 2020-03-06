<template>
  <div class="userBar">
    <el-card shadow="hover" >
      
      <div class='middle' >
        一起在CUIT搞技术吧
      </div>
      <HorizonSpace/>
      <div class='middle' >
        <el-button class='btn'  round @click="ShowLogin()">登入</el-button>
      </div>
      <HorizonSpace/>
      <div class='middle' >
        <el-button class='btn'  round @click="ShowRegi()">注册</el-button>
      </div>
    </el-card>
    <LoginDialogue ref="LoginDialogue"/>
  </div>
  

</template>

<script>
  import HorizonSpace from '@/components/common/HorizonSpace'
  import LoginDialogue from '@/components/dialogues/Login'
  export default {
    name: "UserBar",
    components: {
        HorizonSpace,
        LoginDialogue,
    },
    methods:{
      ShowLogin(){
        this.$refs.LoginDialogue.loginState=true;
        this.$refs.LoginDialogue.dialogVisible=true;
      },
      ShowRegi(){
        this.$refs.LoginDialogue.loginState=false;
        this.$refs.LoginDialogue.dialogVisible=true;
      }
    },
    data(){
      
      return{
        dialogVisible: false,
      }
    }
  }
</script>

<style scoped>
  .middle{
    margin:0 auto !important;
    text-align: center;
  }
  .btn{
    width: 80%;
  }
</style>
