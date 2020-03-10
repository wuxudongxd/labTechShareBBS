import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'


Vue.use(ElementUI);
Vue.use(VueCookies);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requireAuth)&&store.state.token==''){ // 判断该路由是否需要登录权限
      next({
  
        path: '/bbs',

      })
    }else{
      next();
    } 
    if(from.path=='/bbs/write'){
      const answer = window.confirm('当前文章内容未上传，确定要离开？')
      if (answer) {
          next()
      } else {
          next(from)
      }
    }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
