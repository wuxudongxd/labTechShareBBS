<template>
  <div class="selectBar">
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div class="header bottomShadowBox">
        <i class="el-icon-office-building"></i> 关于建立
      </div>
      <div style="padding: 14px;">
        <p>由 <el-link type="primary" @click="gotoLab(1)">易控实验室</el-link> 和 电子爱好者协会 合作建立，基于 vue 和 django。</p>
      
        <p>开发者：前端：<el-link type="primary" @click="gotoUserPage(9)">hanbaoaaa</el-link>，后端：<el-link type="primary" @click="gotoUserPage(8)">东东</el-link></p>
      </div>
    </el-card>
    <HorizonSpace/>
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div  class="header bottomShadowBox">
        <i class="el-icon-picture-outline"></i> 我们的愿景
      </div>
      <div style="padding: 14px;">
        <p>希望能够给cuit默默做技术的人带来一个良好的 学习 交流 分享 的平台。</p>
        <p>也有利于学校各种比赛技术资源的沉淀。</p>
        <p>也能够加深实验室之间的互动合作。</p>
      </div>
    </el-card>
    <HorizonSpace/>
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div  class="header bottomShadowBox">
        <i class="el-icon-date"></i> TODO
      </div>
      <div style="padding: 14px;">
        <p><s>解决普通用户查看他人用户信息</s> </p>
        <p><s>解决点击作者名称跳转到用户信息界面</s> </p>
        <p>个人页加入文章管理</p>
        <p>编写文章页加入已选标签的显示</p>
      </div>
    </el-card>
    <HorizonSpace/>
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div  class="header bottomShadowBox">
        <i class="el-icon-time"></i> 历程
      </div>
      <div style="padding: 14px;">
        <el-timeline>
          <el-timeline-item timestamp="2020/8/15" placement="top">
            <div style="display:inline-block;">
              <el-card>
                <h4>修复了若干界面bug，代码结构整理，加入了打卡</h4>
              </el-card>
            </div>
            
          </el-timeline-item>
        </el-timeline>
      </div>
      <div style="padding: 14px;">
        <el-timeline>
          <el-timeline-item timestamp="2020/7/1" placement="top">
            <div style="display:inline-block;">
              <el-card>
                <h4>在前后端的共同努力下，网站终于初见雏形了！</h4>
              </el-card>
            </div>
            
          </el-timeline-item>
        </el-timeline>
      </div>
      <div style="padding: 14px;">
        <el-timeline>
          <el-timeline-item timestamp="2020/4/26" placement="top">
            <div style="display:inline-block;">
              <el-card>
                <h4>前端🍔咕咕一个多月，继续建设</h4>
              </el-card>
            </div>
            
          </el-timeline-item>
        </el-timeline>
      </div>
      <div style="padding: 14px;">
        <el-timeline>
          <el-timeline-item timestamp="2020/3/18" placement="top">
            <div style="display:inline-block;">
              <el-card>
                <h4>前端🍔咕咕一周，继续建设</h4>
              </el-card>
            </div>
            
          </el-timeline-item>
        </el-timeline>
      </div>
      <div style="padding: 14px;">
        <el-timeline>
          <el-timeline-item timestamp="2020/3/5" placement="top">
            <div style="display:inline-block;">
              <el-card>
                <h4>开始建设</h4>
              </el-card>
            </div>
            
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
    
  </div>
</template>

<script>
  import HorizonSpace from '@/views/components/common/HorizonSpace'
  export default {
    name: "selectBar",
    components: {
      
      HorizonSpace,
    },
    data(){
      return{
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        img:null,
        value: [],
      }
    },
    methods:{
      gotoLab(id){
        switch(id){
          case 1:
            this.$router.push({ path: "/lab" });
            break;
        }
      }
    }
  }
</script>

<style scoped>
.header{
  margin: 0px;
  padding: 24px;
  border-bottom: 1px solid #EBEEF5;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","å¾®è½¯é›…é»‘",Arial,sans-serif;
    font-size: 24px;
    color: #409EFF;
}
</style>
