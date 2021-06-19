<template>
  <b-container>
    <ProductCategory/>
    <b-row>
      <b-col>
        <input
          class="form-control mb-3"
          v-model="search"
          type="text"
          placeholder="Rounded input"
        />
      </b-col>
    </b-row>

    <hr />
    <b-row>
      <b-col lg="2" md="6" xs="12" v-for="item in filterProduct" :key="item.id">
        <ProductListItem :product="item" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Product_List_Item from "./product_list";
import Product_Category from './category/product_category.vue'
export default {
  name: "ProductList",
  data() {
    return {
      msg: "product",
      search: null,
    };
  },

  components: {
    ProductListItem: Product_List_Item,
    ProductCategory : Product_Category
  },

  computed: {
    filterProduct: function() {
      var self = this;
      return self.product.filter((item) => {
        if (self.search) {
          if (self.search == self.search.toLowerCase()) {
            return (
              item.product_inventories.name
                .toLowerCase()
                .indexOf(self.search) >= 0
              //    || book.penerbit_buku.indexOf(self.search) >= 0
            );
          } else {
            return (
              item.product_inventories.name
                .toUpperCase()
                .indexOf(self.search) >= 0
              //    || book.penerbit_buku.indexOf(self.search) >= 0
            );
          }
        } else {
          return self.product;
        }
      });
    },
    ...mapGetters({
      product: "productGet",
    }),
  },
  mounted() {
    setInterval(() => {
      this.$store.dispatch("getProduct");
    }, 2000);
  },
};
</script>
