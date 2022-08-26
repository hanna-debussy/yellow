import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "HelloWorld",
      path: "/hello",
      component: HelloWorld,
    },
  ],
})

export default router