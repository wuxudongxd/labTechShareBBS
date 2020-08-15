import Vue from 'vue'
import VueRouter from 'vue-router'
import context from "../main"

Vue.use(VueRouter);

const Home = () => import('@/views/home/Home');
const Profile = () => import('@/views/profile/Profile');
const Lab = () => import('@/views/labPage/Home');
const BBS = () => import('@/views/bbsPage/Home');
const BBS_Personal = () => import('@/views/bbsPage/mainParts/Personal');
const BBS_Overview = () => import('@/views/bbsPage/mainParts/Overview');
const BBS_Select = () => import('@/views/bbsPage/mainParts/Select');
const BBS_About = () => import('@/views/bbsPage/mainParts/About');
const BBS_Write = () => import('@/views/bbsPage/mainParts/Write');
const BBS_Read = () => import('@/views/bbsPage/mainParts/Read');
const Tools = () => import('@/views/tools/tools');
const Health = () => import('@/views/tools/health/health');


const routes = [
  {
    path: '/',
    redirect: '/bbs'
  },
  {
    path: '/lab',
    component: Lab
  },
  {
    path: '/bbs',
    component: BBS,
    redirect: '/bbs/overview',
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
        component: BBS_About,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'write/:id?',
        name: 'write',
        component: BBS_Write,
        meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        }
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'read/:id',
        name: 'read',
        component: BBS_Read
      },
      {
        path: "*", // 此处需特别注意置于最底部
        component: BBS
      }
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
    path: '/person/:id',
    component: BBS_Personal,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/tools',
    component: Tools,
    // children: [
    //   {
    //     path: '/health',
    //     component: Health
    //   },
    // ]
  },
  {
    path: '/tools/health',
    component: Health,
  },
  {
    path: "*", // 此处需特别注意置于最底部
    component: BBS
  }
];

const router = new VueRouter({
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
});

export default router
