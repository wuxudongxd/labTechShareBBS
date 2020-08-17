<template>
  <div class="outside">
    <div
      :key="i"
      v-for="(cat,i) in detailCatData">
      <div v-if="closeable">

        
        <span 
          :key="i2"
          v-for="(tag,i2,index) in cat.tags">
        
          <el-tag v-if="index==0"
            type="info" size="mini" class="info_tags hoverShadow">
            {{cat.name}}
          </el-tag> 
          <el-tag  size="mini" class="info_tags hoverShadow"
          closable
          @close="unselectTag(i,tag.tagId)">
          {{tag.tagName}}
          </el-tag>
        </span>
        
        
      </div>
      <div v-if="!closeable">

        
        <span 
          :key="i2"
          v-for="(tag,i2,index) in cat.tags">
        
          <el-tag v-if="index==0"
            type="info" size="mini" class="info_tags hoverShadow">
            {{cat.name}}
          </el-tag> 
          <el-tag  size="mini" class="info_tags hoverShadow"
          >
          {{tag.tagName}}
          </el-tag>
        </span>
        
        
      </div>
      <!-- <div v-if="!closeable">
        <el-tag type="info" size="mini" class="info_tags hoverShadow">{{key.name}}</el-tag> 
        <el-tag  size="mini" class="info_tags hoverShadow"
        
        :key="tag.id"
        v-for="tag in key.tags">
        {{tag.tagName}}</el-tag>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CardButton",
  watch:{
    detailCatData(to){
      // console.log(to);
    }
  },
  data() {
    return {};
  },
  methods:{
    unselectTag(catId,tagId){
      this.$emit("onUnselectTag",catId,tagId);
    }
  },
  props: {
    detailCatData:{
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: Object,

      default() {
        return {};
      },
    },
    closeable:{
      //作用是请求的时候提供数据，还有整明为子集评论框

      type: Boolean,

      default() {
        return false;
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
  z-index: 2100;
  background: #ffffff;
}
.info_tags{
  margin-right: 10px;
  margin-bottom: 10px;
  
}
.outside{
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: -10px;
}
</style>
