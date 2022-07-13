import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Find = () => import('@/views/Find')
const Home = () => import('@/views/Home')
const Message = () => import('@/views/Message')
const Personal = () => import('@/views/Personal')
const Login = () => import('@/views/Login')
const Registe = () => import('@/views/Registe')
const Detail = () => import('@/views/Detail')
const Rent = () => import('@/views/Rent')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/personal',
    children: [
      { path: 'find', component: Find },
      { path: 'home', component: Home },
      { path: 'message', component: Message },
      { path: 'personal', component: Personal }

    ]
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/registe', component: Registe
  },
  { path: '/detail/:houseCode', component: Detail },
  { path: '/add', component: Rent }
]

const router = new VueRouter({
  routes
})

export default router
