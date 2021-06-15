<template>
  <div class="CartList">
    <div class="container mt-5">
      <form class="form-inline">
        <div class="form-group mb-2">
          <h5>Shopping Cart</h5>
        </div>
      </form>
      <div
        class="row mb-5"
        v-for="product_item in cartItems.products"
        :key="product_item._id"
      >
        <div class="col">
          <div v-for="product_ in product" :key="product_._id">
            <div class="card" v-if="product_._id == product_item.productId">
              <div class="row">
                <div class="col-3">
                  <input
                    type="checkbox"
                    :value="product_item._id"
                    @change="changeAge(product_item, $event)"
                  />
                  <div class="card-body">
                    <img
                      :src="product_.product_inventories.image_product"
                      class="ml-5 img-fluid"
                      width="150px"
                      alt="Generic placeholder image"
                    />
                  </div>
                </div>
                <div class="col">
                  <ul class="list-group list-group-flush">
                    <div class="text-end">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                        @click="remove(product_item._id)"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      &nbsp;
                    </div>
                    <li class="list-group-item">
                      <h1>{{ product_.product_inventories.name }}</h1>
                    </li>
                    <li class="list-group-item">
                      <h5>
                        Category
                        <span class="badge badge-success">{{
                          product_.product_categories.desc
                        }}</span>
                      </h5>
                    </li>
                    <li class="list-group-item">
                      <h5>
                        Stock :
                        <span class="badge badge-success">{{
                          product_.product_inventories.quantity
                        }}</span>
                      </h5>
                    </li>
                    <li class="list-group-item">
                      Quantity :
                      <button class="btn btn-xs btn-default">-</button>
                      {{ product_item.quantity }}
                      <button class="btn btn-xs btn-default">+</button>
                    </li>
                    <li class="list-group-item">
                      Harga: Rp.{{ product_item.price }}
                    </li>
                    <!-- {{ product_ }} -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group text-end">
        <button class="btn btn-sm btn-info text-light" @click="checkout()">
          Checkout
        </button>
      </div>

      <modal name="order-data" :width="500" :height="500">
        <div class="container">
          <div class="row mt-3">
            <ul v-for="check in checkout_data" :key="check._id">
              <div class="col" v-if="checkout_data.length > 0 ">
                <div v-for="product_ in product" :key="product_._id">
                  <li v-if="product_._id == check.productId">
                    <img
                      :src="product_.product_inventories.image_product"
                      class="ml-5 img-fluid"
                      width="150px"
                      alt="Generic placeholder image"
                    />
                  </li>
                </div>
              </div>
              <div v-else>
                Check Order First !!
              </div>
            </ul>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { authHeader } from "../../utils/common";
export default {
  name: "CartList",
  data() {
    return {
      checkout_data: [],
      showButton: false,
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      product: "productGet",
    }),
  },
  methods: {
    ...mapActions(["getStoreCart", "removeCart", "addCheckout"]),
    cart: function() {
      const token = authHeader().Authorization;
      this.getStoreCart(token);
    },
    remove: function(productId) {
      this.removeCart({ productId: productId });
    },
    checkout: function() {
      console.log(this.checkout_data);
      this.$modal.show("order-data");
    },
    order: function() {
      this.addCheckout(this.checkout_data);
      this.$router.push("/cart/user");
      this.$modal.hide("order-data");
    },
    changeAge: function(item, event) {
      if (event.target.checked === false) {
        // var tokenToRemove;
        const check = this.checkout_data;
        check.forEach((item, index) => {
          if (item._id === item._id) {
            this.checkout_data.splice(index, 1);
            // this.showButton = false;
          }
        });
      } else {
        this.showButton = true;
        this.checkout_data.push(item);
      }
    },
  },

  mounted() {
    // setInterval(() => , 3000);
    this.cart();
  },
};
</script>
