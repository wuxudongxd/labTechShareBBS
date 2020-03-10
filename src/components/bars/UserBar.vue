<template>
  <div class="userBar">
    <el-card shadow="hover" >
      <div v-if="$store.state.token==''">
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
      </div>
      <div v-if="$store.state.token!=''">
        <div class="head">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <p class="username">用户名</p>
        </div>
        <HorizonSpace/>
        个人博客:<br/>sdahsuhdasdasdadasdasdasfaddsasafadfsaad
        <HorizonSpace/>
        实验室:<br/>sdahsuhdasdasdadasdasdasfaddsasafadfsaad
        <HorizonSpace/>
        <div class="btns">
          <el-tooltip class="item" effect="dark" content="发布自己的分享" placement="top">
            <el-button icon="el-icon-edit" circle></el-button>
          </el-tooltip>
          <el-button plain round style="width:100%;" @click="toPerson()">个人页</el-button>
        </div>
      </div>
      
      
    </el-card>
    <LoginDialogue v-if="$store.state.token==''" ref="LoginDialogue"/>
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
    mounted(){
      console.log(this.$store.state.token);
    },
    methods:{
      ShowLogin(){
        this.$refs.LoginDialogue.loginState=true;
        this.$refs.LoginDialogue.dialogVisible=true;
      },
      ShowRegi(){
        this.$refs.LoginDialogue.loginState=false;
        this.$refs.LoginDialogue.dialogVisible=true;
      },
      toPerson() {
      this.$router.push({ path: "/person" });
    },
    },
    data(){
      
      return{
        dialogVisible: false,
      }
    }
  }
</script>

<style scoped>
  .btns{
    display: flex;
  }
  .head{
    text-align: center;
    display: flex;
  }
  .head .username{
    margin-left: 20px;
    margin-top: 20px;
  }
  .head img{
    border-radius: 100px;
    border-style: solid;
    border-width: 3px;
    border-color: white;
    width:  50px;
    height: 50px;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.5)
  }
  .middle{
    margin:0 auto !important;
    text-align: center;
  }
  .btn{
    width: 80%;
  }
</style>
