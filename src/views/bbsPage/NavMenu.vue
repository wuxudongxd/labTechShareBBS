<template>
  <div class="header">
    <div class="content">
      <div class="logo left">
        <router-link to="/"><img src="~assets/img/易控logo.png" alt="易控logo"></router-link>
      </div>
      <ul class="nav left">
        <li :key="key" v-for="(nav,key) in nav_list">
          <router-link :to="nav.link">{{nav.name}}</router-link>
        </li>
      </ul>

    </div>
  </div>

</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        token: "",
        nav_list: [
         {id:'1',name:'首页', link:'/bbs'},
          {id:'2',name:'检索', link:'/bbsIndex'},
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    position: fixed;
    margin: auto;
    z-index: 99;
    background: #fff;
  }
  .content{
      min-width: 600px;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 10px 0 10px;
  }
  .logo img{
    width: 60px;
    height: 60px;
  }

  .nav li {
    float: left;
    line-height: 60px;
    margin:0 0 20px 30px;
  }

  .nav li a:hover{
    padding-bottom: 20px;
    color: var(--color-tint);
  }

  .nav li a.is-active{
    padding-bottom: 20px;
    color: var(--color-high-text);
    border-bottom: 4px solid var(--color-high-text);
  }

  .login-bar{
    margin: 20px 0 0 0;
  }



</style>
