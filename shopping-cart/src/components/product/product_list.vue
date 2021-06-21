<template>
  <div>
    <img
      :src="product.product_inventories.image_product"
      class="img-fluid img-list"
      type="button"
      @click="productDetail(product._id)"
    />
    <div class="card h-100">
      <div class="card-body">
        <div class="card-title">
          <p class="lead">{{ product.product_inventories.name }}</p>
          <small class="text-muted"
            ><span class="badge bg-danger text-light">
              {{ product.discounts.discount_percent }} %</span
            >&nbsp;<del>Rp. {{ formatCurrancy(product.price) }}</del></small
          >
          <p class="fw-bold">Rp. {{ formatCurrancy(product.price) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["product"],
  methods: {
    ...mapActions(["addCart"]),
    details: function (id) {
      let routeData = this.$router.resolve({
        path: "/product/detail",
        query: { _id: id },
      });
      this.$forceUpdate();
      window.open(routeData.href, "true");
      // this.$forceUpdate();
    },
    productDetail: function (id) {
      this.$router.push({
        path: "/product/detail",
        query: { _id: id },
      });
      window.scrollTo(0, 0);
    },
    formatCurrancy: function (value) {
      let val = (value / 1).toFixed(2).replace("&#39;.&#39;, &#39;,&#39;");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.img-list {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
</style>
