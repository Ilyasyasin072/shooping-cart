<template>
  <div class="container mt-5 ">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="dark">Order Detail</h3>
            <ul v-for="data in order" :key="data._id">
              <!-- <li>{{ data }}</li> -->
              <ul
                v-for="data_detail in data.order_items"
                :key="data_detail._id"
              >
                <!-- <li>{{ data_detail }}</li> -->
                <ul
                  v-for="cart_data in data_detail.cart_items"
                  :key="cart_data._id"
                >
                  <div v-for="product in products" :key="product._id">
                    <div v-if="product._id === cart_data.productId">
                            <!-- <p>
                      {{ product.product_inventories.image_detail[0] }}
                    </p> -->
                      <div class="row">
                        <div class="col-4">
                          <img
                            :src="product.product_inventories.image_product"
                            class="img-fluid"
                            width="300"
                          />
                        </div>
                        <div class="col-8">
                          <div class="card">
                            <div class="card-body">
                              <h4>
                                {{ product.product_inventories.name }}
                              </h4>
                            </div>
                          </div>
                          <ul class="mt-3">
                            <li>
                              {{ product.product_categories.name }}
                            </li>
                            <li class="mt-3">
                                 {{ product.product_inventories.name }}
                                 <ul class="mt-3">
                                   <li>
                                      {{ product.product_inventories.image_detail[0].title }}
                                   </li>
                                 </ul>
                            </li>
                            <li class="mt-3">{{ data.total }} </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </ul>
            </ul>
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
