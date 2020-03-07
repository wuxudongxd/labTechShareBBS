import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home');
const Profile = () => import('@/views/profile/Profile');
const Users = () => import('@/views/users/Users');
const Login = () => import('@/components/content/login/Login')
const Register = () => import('@/components/content/login/Register')
const Lab= () => import('@/views/labPage/Home');
const BBS=() => import('@/views/bbsPage/Home');
const BBS_Overview=() => import('@/views/bbsPage/mainParts/Overview');
const BBS_Select=() => import('@/views/bbsPage/mainParts/Select');
const routes = [
  {
    path: '/',
    redirect: '/lab'
  },
  {
    path: '/lab',
    component: Lab
  },
  {
    path: '/bbs',
    component: BBS,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'overview',
        component: BBS_Overview
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'select',
        component: BBS_Select
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'about',
      },
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
       // ...其他子路由     
    ]
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },

];

const router = new VueRouter({
  linkActiveClass: 'is-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
