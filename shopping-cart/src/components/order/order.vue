<template>
  <div class="container mt-5 ">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="dark">Order Detail</h3>
            <div class="order-content" v-for="data in order" :key="data._id">
              <!-- <li>{{ data }}</li> -->
              <div
                v-for="data_detail in data.order_items"
                :key="data_detail._id"
              >
                <!-- <li>{{ data_detail }}</li> -->
                <div
                  v-for="cart_data in data_detail.cart_items"
                  :key="cart_data._id"
                >
                  <div v-for="product in products" :key="product._id">
                    <!-- <p>
                      {{ product.product_inventories.image_detail[0] }}
                    </p> -->
                    <div
                      class="row mt-3"
                      v-if="product._id === cart_data.productId"
                    >
                      <div class="col-md-4 col-lg-4 col-xs-12">
                        <img
                          :src="product.product_inventories.image_product"
                          class="img-fluid order-img"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-xs-12">
                        <ul class="mt-3">
                          <li>
                            {{ product.product_categories.name }}
                          </li>
                          <li class="mt-3">
                            {{ product.product_inventories.name }}
                            <ul class="mt-3">
                              <li>
                                {{
                                  product.product_inventories.image_detail[0]
                                    .title
                                }}
                              </li>
                            </ul>
                          </li>
                          <li class="mt-3">{{ data.total }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "OrderDetail",
  computed: {
    ...mapGetters({
      order: "orderDetail",
      products: "productGet",
    }),
  },
  methods: {
    ...mapActions(["getOrderDetail", "getProduct"]),
    order_detail: function() {
      this.getOrderDetail();
    },
  },
  mounted() {
    this.getOrderDetail();
    this.getProduct();
  },
};
</script>
