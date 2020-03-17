<template>
  <div class="login">
    <el-dialog :title="loginState?'登入':'注册'" :visible.sync="dialogVisible" width='300px'
      :close-on-click-modal='false' @close='onClose()' id="logindialog">
      <el-form ref="form" :model="form" :rules="rules" status-icon>
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="用户名/邮箱"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pw0">
          <el-input v-model="form.pw0" type="password" placeholder="密码"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pw1" v-if="!loginState">
          <el-input v-model="form.pw1" type="password" placeholder="重复密码"  auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="middle"> 
        <el-button class="btn" :loading="loading" type="primary" @click="submit()">{{loginState?'登入':'注册'}}</el-button>
        <el-button type="text" @click="setLoginState(!loginState)">{{loginState?'没有账号，前往注册': '已有账号，前往登入' }}</el-button>
      </div> 
      <div slot="footer" class="dialog-footer">
        
      </div>
    </el-dialog>
  </div>
  

</template>

<script>
  import HorizonSpace from '@/components/common/HorizonSpace'
  import {Login, GetSms,Register} from "@/network/users";
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
      isValid(){
        return 
      },
      submit(){
        
        this.$refs.form.validate(valid => {
          if (valid) {
            this.loading=true;
            if(this.loginState){
              Login({
                username: this.form.name,
                password: this.form.pw0,
              }).then(res => {
                console.log(res);
                if(res==null){
                  this.$alert('用户名或密码错误', '警告', {
                      confirmButtonText: '确定',
                    });
                }
                if(res!=undefined&&res.data.token&&res.data.token!=''){
                  this.$store.commit('setToken', res.data.token);//调用全局函数设置token状态
                }else{
                    this.$alert('用户名或密码错误', '警告', {
                      confirmButtonText: '确定',
                    });
                    this.loading=false;
                }
                
              }).catch(err => {
                this.loading=false;
                console.log(err);
              })
            }else{
              Register({
                username: this.form.name,
                password: this.form.pw0,
              }).then(res => {
                console.log(res);
                switch (res.data.code) {
                  case 0:
                    this.$alert('注册成功', '提示', {
                      confirmButtonText: '前往登入',
                    });
                    console.log("hhhhhh");
                    this.loginState=true;
                    this.loading=false;
                    break;
                  case 1:
                    this.$alert('注册失败，用户名已存在', '提示', {
                      confirmButtonText: '确认',
                    });
                    this.loading=false;
                    break;
                  default:
                    this.loading=false;
                    break;
                }
              }).catch(err => {
                this.loading=false;
                console.log(err);
              })
            }
          }
        })
        
        
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
        loading:false,
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
