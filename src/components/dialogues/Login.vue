<template>
  <div class="login">
    <el-dialog :title="loginState?'登入':'注册'" :visible.sync="dialogVisible" width='300px'
      :close-on-click-modal='false' @close='onClose()'>
      <el-form ref="form" :model="form" :rules="rules" status-icon>
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="用户名/邮箱"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pw0">
          <el-input v-model="form.pw0" placeholder="密码"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pw1" v-if="!loginState">
          <el-input v-model="form.pw1" placeholder="重复密码"  auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="middle"> 
        <el-button class="btn" type="primary" @click="submit()">{{loginState?'登入':'注册'}}</el-button>
        <el-button type="text" @click="setLoginState(!loginState)">{{loginState?'没有账号，前往注册': '已有账号，前往登入' }}</el-button>
      </div> 
      <div slot="footer" class="dialog-footer">
        
      </div>
    </el-dialog>
  </div>
  

</template>

<script>
  import HorizonSpace from '@/components/common/HorizonSpace'
  import {Login, GetSms} from "@/network/users";
  import {checkUsername, checkPassword, checkCode} from '@/utils/validate'

  export default {
    name: "login",
    components: {
        HorizonSpace,
    },
    
    methods:{
      onClose(){
        this.$refs.form.resetFields();
        this.form={
          name: '',
          pw0: '',
          pw1: '',
        };
      },
      setLoginState(state){
        this.$refs.form.resetFields();
        this.loginState=!this.loginState;
        
      },
      submit(){
        if(this.loginState){
          Login({
            username: this.form.name,
            password: this.form.pw0,
          }).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
        }else{

        }
        
      }
    },
    data(){
      return {
        loginState:true,
        dialogVisible: false,
        form: {
          name: '',
          pw0: '',
          pw1: '',
        },
        rules: {
          name: [{validator: checkUsername, trigger: 'blur'}],
          pw0: [{validator: checkPassword, trigger: 'blur'}],
          pw1: [{validator: checkPassword, trigger: 'blur'}],
          code: [{validator: checkCode, trigger: 'blur'}],
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
