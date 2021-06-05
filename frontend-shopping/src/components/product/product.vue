<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="item in product" :key="item.id">
      <div class="columns is-one-quarter">
        <ProductListItem :product="item" />
      </div>
    </div>
  </div>
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
    this.$store.dispatch("getProduct");
  },
};
</script>
