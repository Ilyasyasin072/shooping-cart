<template>
  <div class="CartList">
    <div class="container mt-5">
      <form class="form-inline">
        <div class="form-group mb-2">
          <h5>Shopping Cart</h5>
        </div>
      </form>
      <div
        class="row mt-5 mb-5"
        v-for="product_item in cartItems.products"
        :key="product_item._id"
      >
        <div class="col">
          <div class="card" v-for="product_ in product" :key="product_._id">
            <div class="row" v-if="product_._id == product_item.productId">
              <div class="col-3">
                <input
            type="checkbox"
            :value="product_item._id"
            @change="changeAge(product_item, $event)"
          />
                <div class="card-body">
                  <div class="card" style="width: 18rem;">
                    <img
                      :src="product_.product_inventories.image_product"
                      class="mr-3 img-fluid"
                      alt="Generic placeholder image"
                    />
                    <div class="card-body"></div>
                  </div>
                </div>
              </div>
              <div class="col">
                <ul class="list-group list-group-flush">
                   <div class="text-end">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close" @click="remove(product_item._id)"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  &nbsp;
                </div>
                  <li class="list-group-item">{{ product_item }}</li>
                  <li class="list-group-item">
                    {{ product_.product_inventories.name }}
                  </li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col">
          <form class="form-inline">
            <div class="form-group mb-2">
              <h5>Shopping Cart</h5>
            </div>
          </form>
          <table class="table table-bordered">
            <tbody>
              <tr
                v-for="product_item in cartItems.products"
                :key="product_item._id"
              >
                <div v-for="product_ in product" :key="product_._id">
                  <td v-if="product_._id == product_item.productId">
                    <img
                      class="img-fluid"
                      alt="Card image cap"
                      :src="product_.product_inventories.image_product"
                      width="50px"
                    />
                  </td>
                </div>
                <td>{{ product_item.name }}</td>
                <td>{{ product_item.quantity }}</td>
                <td>{{ product_item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </div>
      <div class="row">
        <div class="col-6">
          <h3 style="color: #161616;">
            DISCOUNT CODE OR GIFT VOUCHER
          </h3>
          <form class="form-inline">
            <div class="form-group">
              <input type="text" class="form-control" />
            </div>
            &nbsp;
            <div class="form-group">
              <button class="btn btn-success">Voucher</button>
            </div>
          </form>
        </div>
        <div class="col-6 text-end">
          <div class="card">
            <div class="card-body">
              <p>asd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row mt-5 mb-5">
        <div v-for="product_item in cartItems.products" :key="product_item._id">
          <div v-for="product_ in product" :key="product_._id">
            <div class="col">
              <div
                class="card"
                style="width: 18rem;"
                v-if="product_._id == product_item.productId"
              >
                <img
                  class="card-img-top"
                  alt="Card image cap"
                  :src="product_.product_inventories.image_product"
                  width="50px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div
          class="col-6"
          v-for="product_item in cartItems.products"
          :key="product_item._id"
        >
          <input
            type="checkbox"
            :value="product_item._id"
            @change="changeAge(product_item, $event)"
          />
          <div class="media" v-for="product_ in product" :key="product_._id">
            <div v-if="product_._id == product_item.productId">
              <img
                :src="product_.product_inventories.image_product"
                class="mr-3"
                alt="Generic placeholder image"
                width="50px"
              />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                <p>
                  Quantity: <strong>{{ product_item.quantity }}</strong>
                </p>
                <p>
                  Price <strong>{{ product_item.quantity }}</strong>
                </p>
                <button
                  @click="remove(product_item._id)"
                  class="btn btn-xs btn-danger"
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-button
        @click="checkout(cartItems)"
        v-if="cartItems.products.length && showButton"
        >Checkout</b-button
      >
    </div>
    <modal name="my-first-modal">
      <b-container>
        <b-row>
          <b-col>
            <ul v-for="check_item in checkout_data" :key="check_item._id">
              <li>{{ check_item.quantity }}</li>
              <li>{{ check_item.price }}</li>
            </ul>
            <b-button @click="order()">Order</b-button>
          </b-col>
        </b-row>
      </b-container>
    </modal> -->
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
      this.$modal.show("my-first-modal");
    },
    order: function() {
      this.addCheckout(this.checkout_data);
      this.$router.push("/cart/user");
      this.$modal.hide("my-first-moda");
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
