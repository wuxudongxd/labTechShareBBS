<template>
  <div id="home">
    <div id="content">

      <el-container>
        
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-aside width="250px" id="sidebar">
          <HorizonSpace/>
          <userBar/>
          <HorizonSpace/>
          <rankBar/>
          <HorizonSpace/>
        </el-aside>
      </el-container>

      <!-- <div id="right_bar">

        <userBar/>
        <HorizonSpace/>
        <rankBar/>
      </div>
      <div id="Main">
        <router-view></router-view>
        
      </div> -->
    </div>
  </div>
</template>

<script>
  import userBar from '@/components/bars/UserBar'
  import rankBar from '@/components/bars/RankBar'
  import HorizonSpace from '@/components/common/HorizonSpace'
  
  export default {
    name: "Home",
    components: {
      //Carousel,
      //Selector,
      userBar,
      HorizonSpace,
      
      rankBar,
    }
  }
</script>

<style scoped>
#content{
    min-width: 820px;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 60px;
    
    height: 100%;
}
#right_bar{
width: 270px;
    float: right;
    margin-right: 20px;
}
#Main{
    margin: 0 310px 0 20px;
    
}
#sidebar{
  margin-right: 20px;
}
</style>
