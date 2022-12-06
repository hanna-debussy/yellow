import { createRouter, createWebHistory } from 'vue-router'

import DayAndNight from "@/components/intro/DayAndNight.vue"
import MainTemplate from "@/components/common/MainTemplate.vue"

import DayView from "@/components/day/DayView.vue"
import NightView from "@/components/night/NightView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: MainTemplate,
    },
    {
      name: "DayView",
      path: "/day",
      component: DayView,
    },
    {
      name: "NightView",
      path: "/night",
      component: NightView,
    },
  ],
})

export default router