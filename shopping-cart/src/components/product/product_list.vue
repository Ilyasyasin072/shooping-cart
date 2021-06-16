<template>
  <div>
    <b-card
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <img :src="product.product_inventories.image_product" class="img-fluid" />
      <b-card-text>
        {{ product.product_inventories.name }}
      </b-card-text>
      <b-button href="#" variant="default" @click="productDetail(product._id)">
        <!-- <router-link
          :to="{ path: '/product/detail', query: { _id: product._id } }"
        >
          About
        </router-link> -->
        Details
      </b-button>
    </b-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["product"],
  methods: {
    ...mapActions(["addCart"]),
    details: function(id) {
      let routeData = this.$router.resolve({
        path: "/product/detail",
        query: { _id: id },
      });
      this.$forceUpdate();
      window.open(routeData.href, "true");
      // this.$forceUpdate();
    },
    productDetail: function(id) {
        this.$router.push({
          path: '/product/detail',
          query: { _id: id } 
        });
    }
  },
};
</script>
