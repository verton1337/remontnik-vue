import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import CreateTicket from "@/views/CreateTicket.vue"


const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register-page',
    component: RegisterPage,
  },
  {
    path: '/create-ticket',
    name: 'create-page',
    component: CreateTicket,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
