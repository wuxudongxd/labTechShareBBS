<template>
  <div class="login">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
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
