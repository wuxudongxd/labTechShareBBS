<template>
  <div class="header">
    <div class="content father">
      <div class="content">
        <div class="logo">
          <router-link to="/">
            <img style="width:60px;" src="~assets/img/易控logo.png" alt="易控logo" v-if="this.islab()" />
          </router-link>
          <router-link to="/">
            <img style="width:200px; margin-left:20px; margin-top:10px;" src="~assets/img/CUITechs.png" alt="易控logo" v-if="!this.islab()" />
          </router-link>
        </div>
        <ul class="nav left" v-if="islab()">
          <li >
            <router-link to="/lab" >首页</router-link>
          </li>
          <li>
            <a @click="movepage(1)">易控简介</a>
          </li>
          <li>
            <a @click="movepage(2)">培养方案</a>
          </li>
          <li>
            <a @click="movepage(3)">活动记录</a>
          </li>
          <li>
            <a @click="movepage(4)">活动记录</a>
          </li>
        </ul>
        <ul class="nav left" v-if="!islab()">
          <li>
            <router-link to="/bbs/overview">首页</router-link>
          </li>
          <li>
            <router-link to="/bbs/select">检索</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <div v-if="token" class="login-bar right">
          <div class="login-box login-box1 left">
            <router-link to>个人中心</router-link>
            <el-menu width="200" class="member el-menu-demo" mode="horizontal">
              <el-submenu index="2">
                <template slot="title">
                  <router-link to>
                    <img src="/static/images/logo@2x.png" alt />
                  </router-link>
                </template>
                <el-menu-item index="2-1">我的账户</el-menu-item>
                <el-menu-item index="2-2">
                  <router-link to="/user/order">我的订单</router-link>
                </el-menu-item>
                <el-menu-item index="2-3">我的优惠卷</el-menu-item>
                <el-menu-item index="2-3">
                  <span @click="logoutHandler">退出登录</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>

        <div v-if="!token" class="login-bar right">
          <el-button round @click="toBBS()" v-if="islab()">前往社区</el-button>
          <div class="login-box login-box2">
            <router-link to="/lab">lab</router-link>&nbsp;|&nbsp;
            <router-link to="/register">注册</router-link>
          </div>
        </div>
      </div>
      

      
    </div>
  </div>
</template>

<script>
import Util from "@/assets/js/util.js";

export default {
  name: "NavMenu",
  data() {
    return {
      token: "",
      navlist: [
        { id: "1", name: "首页", link: "/lab" },
        { id: "2", name: "易控成员", link: "/users" },
        { id: "3", name: "易控课堂", link: "/class" }
      ]
    };
  },
  methods: {
    toBBS() {
      this.$router.push({ path: "/bbs/overview" });
    },
    islab() {
      return this.$route.path == "/lab" ? true : false;
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    movepage(num) {
      Util.$emit("showDetails", num);
    },
    movepage1() {
      alert(5);
    }
  }
};
</script>

<style scoped>

.header {
  width: 100%;
  height: 60px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: fixed;
  
  margin: auto;
  z-index: 99;
  background: #fff;
}
.father{
  display: flex;
  
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  height: 60px;
}
.content {
  display:flex;justify-content:space-between;
}

.nav li {
  float: left;
  line-height: 60px;
  margin: 0 0 20px 30px;
}

.nav li {
  float: left;
  line-height: 60px;
  margin: 0 0 20px 30px;
}

.nav li a:hover {
  padding-bottom: 20px;
  color: var(--color-tint);
}

.nav li a.is-active {
  padding-bottom: 20px;
  color: var(--color-high-text);
  border-bottom: 4px solid var(--color-high-text);
}

.login-bar {
  margin: 10px 0 0 0;
}
</style>
