<template>
  <div id="home">
    <div id="content">
      <HorizonSpace/>
      <div id="right_bar">

        <userBar/>
        <HorizonSpace/>
        <rankBar/>
      </div>
      <div id="Main">
        <router-view></router-view>
        <NotiPart/>
        <HorizonSpace/>
        <TutorPart/>
        <HorizonSpace/>
        <SharePart/>
        <HorizonSpace/>
        <ProjectPart/>
        <HorizonSpace/>
      </div>
    </div>
  </div>
</template>

<script>
  import userBar from '@/components/bars/UserBar'
  import rankBar from '@/components/bars/RankBar'
  import HorizonSpace from '@/components/common/HorizonSpace'
  import NotiPart from './Notification'
  import TutorPart from './Tutor'
  import SharePart from './Share'
  import ProjectPart from './Project'
  
  export default {
    name: "Home",
    components: {
      //Carousel,
      //Selector,
      userBar,
      HorizonSpace,
      NotiPart,
      TutorPart,
      SharePart,
      ProjectPart,
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
    
}
#right_bar{
width: 270px;
    float: right;
    margin-right: 20px;
}
#Main{
    margin: 0 310px 0 20px;
    
}
</style>
