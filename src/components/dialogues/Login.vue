<template>
  <div class="login">
    <el-dialog :title="loginState?'登入':'注册'" :visible.sync="dialogVisible" width='300px'>
      <el-form :model="form" v-show="loginState">
        <el-form-item>
          <el-input v-model="form.name" placeholder="用户名/邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pw" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form" v-show="!loginState">
        <el-form-item>
          <el-input v-model="form.name" placeholder="用户名/邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pw" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pw" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="middle"> 
        <el-button class="btn" type="primary" @click="dialogVisible = false">{{loginState?'登入':'注册'}}</el-button>
        <el-button type="text" @click="loginState=!loginState">{{loginState?'没有账号，前往注册': '已有账号，前往登入' }}</el-button>
      </div> 
      <div slot="footer" class="dialog-footer">
        
      </div>
    </el-dialog>
  </div>
  

</template>

<script>
  import HorizonSpace from '@/components/common/HorizonSpace'
  export default {
    name: "login",
    components: {
        HorizonSpace,
    },
    methods:{
    },
    data(){
      return {
        title:"登入",
        loginState:true,
        dialogVisible: false,
        form: {
          name: '',
          pw: '',
        },
      };
    }
  }
</script>

<style scoped>
  .middle{
    margin:0 auto !important;
    text-align: center;
  }
  .btn{
    width: 100%;
  }
</style>
