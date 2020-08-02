<template>
  <div class="Notification">
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div style="padding: 24px;" class="bottomShadowBox taghead">
        <div class="ArticleListTitle"><i :class="iconName"></i>{{" "+tagName}}</div>
        <el-button
          @click="detail()"
          
          style="height: 28px; " circle size="mini" icon="el-icon-arrow-right">
        </el-button>
      </div>
      <div
          :key="key.id"
          v-for="key,index in articleData">
          <hr v-if="index<5" color=#EBEEF5 SIZE=1>
          <ArticleBar
          v-if="index<5"
          :authorInfo="key.author_info"
          :createTime="key.created_time"
          :title="key.title"
          :id="key.id"
          :simple="true"
          ></ArticleBar>
      </div>
      
    </el-card>
    
  </div>
</template>

<script>
  import ArticleBar from '../selectParts/ArticleBar'
  import {GetArticlesByTags} from "@/network/articles";
  export default {
    name: "Notification",
    components: {
      ArticleBar,
    },
    mounted:function(){
      this.getArticlesByTags();
    },
    data(){
      return{
        img:null,
        info:{
          name:"sdads"
        },
        articleData:[]
        
      }
    },
    props:{
      tagId:{
        type:Number,
        default() {
          return -1;
        }
      },
      tagName:{
        type:String,
        default() {
          return "";
        }
      },
      iconName:{
        type:String,
        default() {
          return "";
        }
      },
    },
    methods:{
      detail(){
        this.$router.push({ path: "/bbs/select?page=1&tags="+this.tagId });
      },
      getArticlesByTags(){
        GetArticlesByTags([this.tagId],1).then((res=>{
          switch (res.status) {
            case 200:
              this.articleData=res.data.results;
              break;
          }
        }))
      },
    }
  }
</script>

<style scoped>
.taghead{
  display: flex;
  justify-content:space-between;
}
.ArticleListTitle{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","å¾®è½¯é›…é»‘",Arial,sans-serif;
    font-size: 24px;
    padding: 0 0 0 10px;
    transition: color 0.3s ease 0s;
    -o-transition: color 0.35s ease 0s;
    -moz-transition: color 0.35s ease 0s;
    -webkit-transition: color 0.3s ease 0s;
    color: #409EFF;
}
.ArticleListTitle:hover{
    color: rgb(111, 183, 255);
}
</style>
