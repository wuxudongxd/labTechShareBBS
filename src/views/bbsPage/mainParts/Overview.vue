<template>
  <div class="overview">
    <el-row :gutter="20">
      <el-col :span="12">
        <ArticleList
        tagName="公告"
        iconName="el-icon-bell"
        :tagId="1"
        
        />
        <HorizonSpace/>
        <ArticleList
        tagName="提问"
        iconName="el-icon-chat-dot-round"
        :tagId="3"
        />
        <HorizonSpace/>
        <ArticleList
        tagName="知识库"
        iconName="el-icon-notebook-1"
        :tagId="5"
        />
        
      </el-col>
      <el-col :span="12">
        <ArticleList
        tagName="学习分享"
        iconName="el-icon-reading"
        :tagId="2"
        />
        <HorizonSpace/>
        <ArticleList
        tagName="项目记录"
        iconName="el-icon-data-analysis"
        :tagId="4"
        />
        <HorizonSpace/>
        <ArticleList
        tagName="资源分享"
        iconName="el-icon-folder-opened"
        :tagId="6"
        />
        
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
  import ArticleList from './overviewParts/ArticleList'
  import HorizonSpace from '@/views/components/common/HorizonSpace'
  

  export default {
    name: "overview",
    components: {
      HorizonSpace,
      ArticleList
    },
    data(){
      return{
        img:null,
        
      }
    }
  }
</script>

<style scoped>
</style>
