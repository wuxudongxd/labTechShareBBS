<template>
  <div class="health">
    <el-card class="card" shadow="hover">
      <el-button
        class="button"
        type="primary"
        @click="HealthClock"
        :disabled='clocked'
      >
        确认健康打卡
      </el-button>
      <div class="progress">
        <el-progress type="circle" :percentage="percentage"></el-progress>
      </div>

      <div class="msg">
        {{ clock_res }}
      </div>
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit">
      </el-image>
    </el-card>
  </div>


</template>

<script>
// import {reqGetHealthClock} from '@/api/user'
// import {setToken} from "@/utils/auth";

export default {
  name: "health",
  data() {
    return {
      clock_res: "请确实身体无感染后进行确认打卡。若打卡失败，可刷新页面重新打卡或手动点击按钮\n\n" +
        "注：由于前端页面调整，且有更好用的QQ机器人自动打卡，本功能暂时下线，有自动健康打卡需求可进下群使用机器人\n\n",
      clocked: false,
      percentage: 25,
      url: require("../../../assets/img/health.png"),
      fit: 'cover'
    }
  },
  methods: {
    HealthClock() {
      // setToken(this.$route.query.token)
      // reqGetHealthClock().then(res => {
      //   if (res) {
      //     console.log(res)
      //     this.clock_res = res.msg
      //     this.clocked = res.results
      //     if (true===this.clocked) {
      //       this.percentage = 100
      //     }
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.health {
  text-align: center;
  padding: 24px 0 50px 0;
  /*width: 80%;*/
}

.card {
  padding: 24px 0 50px 0;
}

.button {

}

.progress {
  padding: 50px 0 50px 0;
}

.msg {
  white-space: pre-wrap;  /*pre-wrap值的意思是保留空白并且正常换行*/
}



</style>
