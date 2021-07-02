<template>
  <b-container>
    <ProductCategory/>
    <hr>
      <b-row>
      <b-col>
        <input
          class="form-control mb-3"
          v-model="search"
          type="text"
          placeholder="Search Product .."
        />
      </b-col>
    </b-row>
    <hr />
   <div>
      <b-row>
      <b-col
        lg="3"
        md="3"
        xs="12"
        v-for="item in filterProduct"
        :key="item._id"
      >
        <ProductListItem :product="item" />
      </b-col>
    </b-row>
   </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Product_List_Item from "./product_list";
import Product_Category from "./category/product_category.vue";
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
    ProductCategory: Product_Category,
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
    // setInterval(() => {
    this.$store.dispatch("getProduct");
    // }, 2000);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway");

/* body {
  display: flex;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
}

#app {
  width: 60%;
  padding: 30px;
}

header {
  padding: 20px 0;
  text-align: center;
  background-color:black;
}
header h1 {
  font-size: 1.8em;
  color: #ffffff;
} */
</style>
