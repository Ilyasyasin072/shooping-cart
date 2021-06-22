<template>
  <div>
    <div class="row">
      <div>
        <div class="card">
          <div class="text-center">
            <img
              :src="product.product_inventories.image_product"
              class="img-fluid img-list"
              type="button"
              @click="productDetail(product._id)"
            />
          </div>
          <div class="product-details">
            <span class="font-weight-bold d-block">
            <small class="lead p-2">{{ product.product_inventories.name }}</small>
              <div class="card-title p-2">
                <small class="text-muted"
                  ><span class="badge bg-danger text-light">
                    {{ product.discounts.discount_percent }} %</span
                  >&nbsp;<del
                    >Rp. {{ formatCurrancy(product.price) }}</del
                  ></small
                >
                <p class="fw-bold">Rp. {{ formatCurrancy(product.price) }}</p>
              </div>
            </span>
            <div class="buttons d-flex flex-row">
              <button class="btn btn-success cart-button btn-block w-100"  @click="addCartItem(product._id, product.price)">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img
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
    </div> -->
  </div>
</template>
<script>
import { mapActions } from "vuex";

import { authHeader } from "../../utils/common";
export default {
  name: "ProductListItem",
  props: ["product"],
  data() {
    return {
       cart_item: {
        qty: 1,
        quantity: 1,
      },
    }
  },
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
        path: "/product/detail",
        query: { _id: id },
      });
      window.scrollTo(0, 0);
    },
    addCartItem: function (productId, price) {
      this.userLogin = authHeader().Authorization;
      if (this.userLogin) {
        const { qty, quantity } = this.cart_item;
        this.addCart({
          productId: productId,
          qty: qty,
          quantity: quantity,
          total: price,
        });
        // this.$router.push("/cart/user");
        this.$fire({
          title: "Add to Cart",
          type: "success",
          timer: 3000,
        }).then(() => {});
      } else {
        this.$router.push("/login");
      }
    },
    formatCurrancy: function(value) {
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
