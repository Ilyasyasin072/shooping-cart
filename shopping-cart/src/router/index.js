
import Dashboard from '../components/dashboard/dashboard.vue';
import Product from '../components/product/product.vue';
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  }
]


export default routes