<template>
   <div>
        <h1>{{ msg }}</h1>
        <ul v-for="item in product" :key="item.id">
            <li>asd
                {{ item.title }}
            </li>
        </ul>
   </div>
</template>


<script>
import { mapGetters} from 'vuex';

export default {
    data(){
        return {
            msg: 'product'
        }
    },

   computed: mapGetters({
       product: 'productGet'
   }),
    mounted() {
        this.$store.dispatch('getProduct');
    }
}
</script>