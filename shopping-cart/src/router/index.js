import VueRouter from 'vue-router';
import Product from '../components/product/product.vue';
import Login from '../components/auth/login.vue';
import Register from '../components/auth/register.vue';
import Dashboard from '../components/dashboard/dashboard.vue';
import ProductDetail from '../components/product/detail_product/detail.vue'
import User from '../components/user/index.vue'
import Cart from '../components/cart/cart.vue'
import Order from '../components/order/order.vue'
import Category from '../components/product/category/detail/detail_category.vue'
import SendingOrder from '../components/cart/sending/sending_order.vue'
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
    }, {
      name: 'cart',
      path: '/cart/user',
      component: Cart,
      props: true,
      meta: {
        requiresAuth: true
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
      name: 'User',
      path: '/user/profile',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'Order',
      path: '/order',
      component: Order,
      props: true,
    },
    {
      name: 'ProductDetail',
      path: '/product/detail',
      component: ProductDetail,
      props(route) {
        return { _id: route.query._id._id }
      },
      meta: {
        // requiresAuth: true,
        reload: true,
      }
    },

    {
      name: 'categoryDetail',
      path: '/category/:id',
      component: Category
    },
    {
      name: 'dashboard',
      path: '/',
      component: Dashboard,

    },
    {
      name: "sendingOrder",
      path: "/sending/customer",
      component: SendingOrder,
    },
    { path: '*', redirect: '/' }
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