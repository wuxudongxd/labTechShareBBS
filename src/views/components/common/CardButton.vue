<template>
  <el-card shadow="hover" class="card">
    <div class="btn" :style="css"><i :class="iconClass"></i> {{text}}</div>
  </el-card>
</template>

<script>
export default {
  name: "CardButton",
  data() {
    return {};
  },
  props: {
    iconClass: {
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: String,

      default() {
        return "";
      },
    },
    text: {
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: String,

      default() {
        return null;
      },
    },
    css: {
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: String,

      default() {
        return "";
      },
    },
  },
};
</script>

<style scoped>
.btn {
  text-align: center;
}
.card{
  cursor:pointer;
}
</style>
