<template>
  <div class="selectBar">
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div slot="header" class="clearfix">
        <span>关于建立</span>
      </div>
      <div style="padding: 14px;">
        <span>由 易控实验室 和 电子爱好者协会 合作建立，基于 vue 和 django。</span>
      </div>
    </el-card>
    <HorizonSpace/>
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div slot="header" class="clearfix">
        <span>我们的愿景</span>
      </div>
      <div style="padding: 14px;">
        <p>希望能够给cuit默默做技术的人带来一个良好的 学习 交流 分享 的平台。</p>
        <p>也有利于学校各种比赛技术资源的沉淀。</p>
        <p>也能够加深实验室之间的互动合作。</p>
      </div>
    </el-card>
    <HorizonSpace/>
    <el-card :body-style="{ padding: '0px' }"  shadow="hover">
      <div slot="header" class="clearfix">
        <span>历程</span>
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
  import HorizonSpace from '@/components/common/HorizonSpace'
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
    }
  }
</script>

<style scoped>
</style>
