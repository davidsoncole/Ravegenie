import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Mail_verification from './views/Mail_verification.vue'
import Verify_mail from './views/Verify_mail.vue'
import Logout from './views/Logout.vue'

import Business_app from './views/Business_app.vue'
import Dashboard from './views/business/Dashboard.vue'
import Advert from './views/business/Advert.vue'
import Promotions from './views/business/Promotions.vue'
import Settings from './views/business/Settings.vue'
import Transactions from './views/business/Transactions.vue'

import Publisher from './views/Publisher.vue'
import User_dashboard from './views/user/User_dashboard.vue'
import Details from './views/user/Details.vue'
import My_campaign from './views/user/My_campaign.vue'
import User_campaign from './views/user/User_campaign.vue'
import User_tasks from './views/user/User_tasks.vue'
import My_tasks from './views/user/My_tasks.vue'
import User_settings from './views/user/User_settings.vue'
import User_transactions from './views/user/User_transactions.vue'
import { Verify } from 'crypto';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/mail_verification',
      name: 'mail_verification',
      component: Mail_verification
    },
    {
      path: '/verify_mail',
      name: 'verify_mail',
      component: Verify_mail
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/business_app',
      name: 'business_app',
      component: Business_app,
      // route level code-splitting
      // this generates a separate chunk (dashboard.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "dashboard" */ './views/app/Dashboard.vue')
      children: [
        {path: 'Dashboard', component: Dashboard},
        {path: 'Promotions', component: Promotions},
        {path: 'Advert', component: Advert},
        {path: 'Settings', component: Settings},
        {path: 'Transactions', component: Transactions},
      ],
    },
    {
      path: '/publisher',
      name: 'publisher',
      component: Publisher,
      // route level code-splitting
      // this generates a separate chunk (dashboard.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "dashboard" */ './views/app/Dashboard.vue')
      children: [
        {path: 'User_dashboard', component: User_dashboard},
        {path: 'User_campaign', component: User_campaign},
        {path: 'Details', component: Details},
        {path: 'User_settings', component: User_settings},
        {path: 'User_transactions', component: User_transactions},
        {path: 'User_tasks', component: User_tasks},
        {path: 'My_tasks', component: My_tasks},
        {path: 'My_campaign', component: My_campaign},
      ],
    },
    
  ]
})
