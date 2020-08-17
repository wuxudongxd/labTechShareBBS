<template>
  <div class="container">
    <div class="name">
      {{catName}}
    </div>
    <el-tag size="mini" class="tag hoverShadow"
      :key="i"
      v-for="(item,i) in tags[catIndex].tags"
      @click="selectTag(i)"
    >{{item.tagName}}</el-tag>
  </div>
</template>

<script>
export default {
  name: "CardButton",
  data() {
    return {
      
    };
  },
  methods:{
    selectTag(tagId){
      // console.log(this.catIndex,index)
      this.$emit("onSelectTag",this,this.catIndex,tagId);
    }
  },
  watch:{
    tags(to){
      console.log('to',to)
    }
  },
  props: {
    catName: {
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: String,

      default() {
        return "";
      },
    },
    catIndex: {
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: String,

      default() {
        return "";
      },
    },
    tags: {
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: Object,

      default() {
        return {};
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
  padding-right: 10px;
}
.name{
  margin: 10px;
  font-size:18px;
}
.tag{
  margin-left: 10px;
  margin-bottom: 10px;
  cursor:pointer;
}
</style>
