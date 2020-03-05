<template>
  <div id="home">
    <div id="content">
      <HorizonSpace/>
      <div id="right_bar">

        <userBar/>
      </div>
      <div id="Main">
        <NotiPart/>
        <HorizonSpace/>
        <TutorPart/>
        <HorizonSpace/>
        <SharePart/>
      </div>
    </div>
  </div>
</template>

<script>
  import Selector from '@/components/content/selector/Selector'
  import userBar from '@/components/bars/UserBar'
  import HorizonSpace from '@/components/common/HorizonSpace'
  import NotiPart from './Notification'
  import TutorPart from './Tutor'
  import SharePart from './Share'
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
    }
  }
</script>

<style scoped>
#content{
    min-width: 600px;
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
