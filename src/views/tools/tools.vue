<template>
  <div class="tools">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <div class="bottomShadowBox taghead card">
        <router-link to="/tools/health" class="ToolsTitle">健康打卡</router-link>
        <el-button
          @click="detail()"
          style="height: 28px; "
          circle
          size="mini"
          icon="el-icon-arrow-right"
        >
        </el-button>
      </div>
    </el-card>


  </div>


</template>

<script>
export default {
  name: "tools",
  methods: {
    detail() {
      this.$router.push({path: "/tools/health"});
    },
  }
}
</script>

<style scoped>
.tools {
  padding: 24px 0 24px 240px;
  width: 50%;
}

.ToolsTitle {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "å¾®è½¯é›…é»‘", Arial, sans-serif;
  font-size: 24px;
  padding: 0 10px 0 10px;
  transition: color 0.3s ease 0s;
  -o-transition: color 0.35s ease 0s;
  -moz-transition: color 0.35s ease 0s;
  -webkit-transition: color 0.3s ease 0s;
  color: #409eff;

}

.card {
  padding: 24px 0 24px 80px;
}
</style>
