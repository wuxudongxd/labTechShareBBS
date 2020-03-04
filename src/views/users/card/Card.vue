<template>
  <div id="card">
    <el-col class="left-col">
      <el-card class="box-card1"></el-card>
    </el-col>
    <el-col class="right-col">
      <el-card class="box-card2" v-for="item in res">
        <el-row>
          <span class="avatar">
            <el-avatar :size="60" icon="el-icon-user-solid"></el-avatar>
          </span>
          <span class="username">{{item.username}}</span>
        </el-row>
        <div class="text1">
          <div>昵称:{{item.nickname}}</div>
          <div>性别:{{item.gender}}</div>
          <div>权限:{{item.sign}}</div>
          <div>邮箱:{{item.email}}</div>
          <div>专业:</div>
          <div>学号:{{item.student_id}}</div>
        </div>
        <div class="text2">
          <div>简介:{{item.introduction}}</div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
  import {getUsersMultiData} from "@/network/users";

  export default {
    name: "Card",
    data() {
      return {
        res: [],
      }
    },
    created() {
      getUsersMultiData().then(res => {
        this.res = res.data.results
      })
    },
  }
</script>

<style scoped>
  .left-col {
    float: left;
    width: 30%;
  }

  .right-col {
    float: right;
    width: 70%;
  }

  .box-card1 {
    height: 550px;
    width: 70%;
    border-radius: 10px; /*圆角*/
    margin: 40px 60px;
  }

  .box-card2 {
    height: 450px;
    width: 80%;
    border-radius: 10px; /*圆角*/
    padding: 10px 10px 10px 30px;
    margin: 40px 20px;
  }


  .username {
    position: absolute;
    top: 5px;
    left: 45%;
    font-size: 40px;
  }

  .text1 {
    margin: 20px 10px 10px 10px;
    font-size: 14px;
  }

  .text2 {
    margin: 20px 10px 10px 10px;
    font-size: 14px;
  }
</style>
