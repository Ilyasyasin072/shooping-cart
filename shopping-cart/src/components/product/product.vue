<template>
  <b-container>
    <b-row>
      <b-col lg="4" md="6" xs="12" v-for="item in product" :key="item.id">
        <ProductListItem :product="item" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Product_List_Item from "./product_list";
export default {
  name: "ProductList",
  data() {
    return {
      msg: "product",
    };
  },

  components: {
    ProductListItem: Product_List_Item,
  },

  computed: mapGetters({
    product: "productGet",
  }),
  mounted() {
    setInterval(() => {
          this.$store.dispatch("getProduct");
    }, 2000)
  },
};
</script>
