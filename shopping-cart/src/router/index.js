import VueRouter from 'vue-router';
import Product from '../components/product/product.vue';
import Login from '../components/auth/login.vue';
import Register from '../components/auth/register.vue';
import Dashboard from '../components/dashboard/dashboard.vue';
import ProductDetail from '../components/product/detail_product/detail.vue'

const router = new VueRouter({
  mode: 'history',
  // routes: routes,
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      name: 'register',
      path: '/register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      name: 'Product',
      path: '/product',
      component: Product,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'ProductDetail',
      path: '/product/detail',
      component: ProductDetail,
      props(route) {
        return { _id: route.query._id._id }
      },
      meta: {
        requiresAuth: true,
        reload: true,
      }
    },
    {
      name: 'dashboard',
      path: '/',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    // { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = localStorage.getItem('token')
      if (user) {
        next()
      } else {
        console.log(user)
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        })
      }

    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('token') === null) {
      next()
    } else {
      let user = localStorage.getItem('token')
      if (user) {
        next({
          path: '/',
          params: { nextUrl: to.fullPath }
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})



export default router