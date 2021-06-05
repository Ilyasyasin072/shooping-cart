import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';



import '../node_modules/bulma/css/bulma.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

createApp(App).use(store).use(router).use(VueSplide).mount('#app')
