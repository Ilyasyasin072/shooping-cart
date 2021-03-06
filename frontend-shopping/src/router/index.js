import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Product from '../components/product/product.vue';
import Cart from '../components/cart/cart.vue';
import Dashboard from '../components/dashboard/dashboard.vue';
import Login from '../components/auth/login.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },{
    path: '/product',
    sudoname: 'Product',
    component: Product
  },{
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
