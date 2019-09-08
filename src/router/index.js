import Vue from 'vue'
import Router from 'vue-router'

import DianYing from '../pages/dianying'
import JiuDian from '../pages/jiudian'
import MeiShi from '../pages/meishi'
import WaiMai from '../pages/waimai'
import YuLe from '../pages/yule'
import Home from '../pages/home'
import Login from '../pages/login'
import ZhuCe from '../pages/zhuce'
import ShouYe from '../pages/shouye'
import GuangBo from '../pages/guangbo'
import TuShu from '../pages/tushu'
import XiaoZu from '../pages/xiaozu'

Vue.use(Router)

export default new Router({
  routes: [
 
      { 
        path:"/home",
        name:"Home",
        component:Home
      },
      { 
        path:"/dianying",
        name:"DianYing",
        component:DianYing
      },
      { 
        path:"/jiudian",
        name:"JiuDian",
        component:JiuDian
      },
      { 
        path:"/meishi",
        name:"MeiShi",
        component:MeiShi
      },
      { 
        path:"/waimai",
        name:"WaiMai",
        component:WaiMai
      },
      { 
        path:"/yule",
        name:"YuLe",
        component:YuLe
      },
      {
        path:"/login",
        name:"Login",
        component:Login
      },
      {
        path:"/zhuce",
        name:"ZhuCe",
        component:ZhuCe
      },
      {
        path:"/shouye",
        name:"ShouYe",
        component:ShouYe
      },
      {
        path:"/guangbo",
        name:"GuangBo",
        component:GuangBo
      },
      {
        path:"/tushu",
        name:"TuShu",
        component:TuShu
      },
      {
        path:"/xiaozu",
        name:"XiaoZu",
        component:XiaoZu
      },
      {
        path:"/*",
        redirect:"/shouye"
      }
  ]
})
