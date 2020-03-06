<template>
  <div class="overview">
        <NotiPart/>
        <HorizonSpace/>
        <TutorPart/>
        <HorizonSpace/>
        <SharePart/>
        <HorizonSpace/>
        <ProjectPart/>
        <HorizonSpace/>
  </div>
</template>

<script>
  import NotiPart from './overviewParts/Notification'
  import TutorPart from './overviewParts/Tutor'
  import SharePart from './overviewParts/Share'
  import ProjectPart from './overviewParts/Project'
  import HorizonSpace from '@/components/common/HorizonSpace'

  export default {
    name: "overview",
    components: {
      NotiPart,
      TutorPart,
      SharePart,
      ProjectPart,
      HorizonSpace,
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
