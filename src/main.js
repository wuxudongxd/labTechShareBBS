import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueCookies from "vue-cookies";
import "./permission";
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css"; // 样式文件
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

Vue.use(ElementUI);
Vue.use(VueCookies);

Vue.config.productionTip = false;

Vue.prototype.hasLoginData = function() {
  //changeData是函数名
  return store.getters.userinfo;
};

Vue.prototype.sortArr = function(arr) {
  //创建每次循环存储最大值得变量
  var max; //遍历数组，默认arr中的某一个元素为最大值，进行逐一比较
  for (var i = 0; i < arr.length; i++) {
    //外层循环一次，就拿arr[i] 和 内层循环arr.legend次的 arr[j] 做对比
    for (var j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        //如果arr[j]大就把此时的值赋值给最大值变量max
        max = arr[j];
        arr[j] = arr[i];
        arr[i] = max;
      }
    }
  }
  return arr;
};

Vue.prototype.gotoUserPage = function(id) {
  if (id < 0) return;
  router.push({ path: "/person/" + id });
};

var context = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
export default context;
