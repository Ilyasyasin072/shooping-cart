<template>
  <div class="container mt-5">
    <form class="form-inline">
      <div class="form-group mb-2">
        <h5>Shopping Cart</h5>
      </div>
    </form>
    <div v-if="cartItems && cartItems.products.length">
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

      <div class="form-group text-end" v-if="checkout_data.length">
        <button class="btn btn-sm btn-info text-light" @click="checkout()">
          Checkout
        </button>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center">
                Upps Keranjang Anda Kosong
              </h1>
              <button @click="dashboard_" class="btn btn-dark text-light">
                Belaja ..
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal
      name="order-data"
      :min-width="200"
      :min-height="200"
      :scrollable="true"
      :reset="true"
      width="60%"
      height="auto"
    >
      <!-- <SendingView class="modal-checkout" :checkout_data="checkout_data" :product="product" /> -->
      <h2 class="mr-auto p-3">Sending</h2>
      <div
        class="row ml-auto mr-auto mt-3"
        v-for="check in checkout_data"
        :key="check._id"
      >
        <div class="col">
          <div v-for="product_ in product" :key="product_._id">
            <div class="card" v-if="product_._id == check.productId">
              <div v-if="product_._id == check.productId">
                <!-- <div class="card-title">
                    <h5 class="p-3">Sending</h5>
                  </div> -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                      <img
                        :src="product_.product_inventories.image_product"
                        class="ml-3 img-fluid card-img-to"
                        alt="Generic placeholder image"
                        width="150px"
                      />
                    </div>
                    <div class="col-9">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h3>
                            Category
                            <span class="badge badge-success">{{
                              product_.product_categories.name
                            }}</span>
                          </h3>
                        </li>
                        <li class="list-group-item">
                          <h5>
                            Product
                            <span class="badge badge-success">{{
                              product_.product_inventories.name
                            }}</span>
                          </h5>
                        </li>
                        <li class="list-group-item">
                          <h5>
                            Quantity
                            <span class="badge badge-success">{{
                              check.quantity
                            }}</span>
                          </h5>
                        </li>
                        <li class="list-group-item">
                          <h5>
                            Price
                            <span class="badge badge-success">{{
                              check.price
                            }}</span>
                          </h5>
                        </li>
                      </ul>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="dropdown mt-3">
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="row">

            <div class="col">
               <div v-for="user_detail in user.address" :key="user_detail._id">
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  v-model="user_detail.address_line1"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                  v-model="user_detail.address_line2"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity"  v-model="user_detail.city" />
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip"  v-model="user_detail.zipCode" />
                </div>

                <div class="form-group col-md-4">
                  <label for="inputState">phone</label>
                 <input type="text" class="form-control" id="inputCity"  v-model="user_detail.mobile" />
                </div>
              </div>
            </div>

            </div>
        </div>
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
      <div class="form-group mt-3 p-3">
        <button class="btn btn-dark text-light" @click="order">Beli ..</button>
      </div>
    </modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { authHeader } from "../../utils/common";
// import SendingView from "./sending/sending.vue";
export default {
  name: "CartList",
  data() {
    return {
      checkout_data: [],
      showButton: false,
      selected: null,
      options: [
        { value: null, text: "Please Choose Bank" },
        { value: "126", text: "BCA" },
        { value: "128", text: "BRI" },
        {
          label: "Grouped options",
          options: [
            { value: { C: "3PO" }, text: "Option with object value" },
            { value: { R: "2D2" }, text: "Another option with object value" },
          ],
        },
      ],
    };
  },
  components: {
    // SendingView,
  },
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      product: "productGet",
      user: "getUserProfile",
    }),
  },
  methods: {
    ...mapActions([
      "getStoreCart",
      "removeCart",
      "addCheckout",
      "getProduct",
      "getUserProfileAction",
    ]),
    cart: function() {
      const token = authHeader().Authorization;
      this.getStoreCart(token);
    },
    productGet: function() {
      this.getProduct();
    },
    remove: function(productId) {
      this.removeCart({ productId: productId });
    },
    checkout: function() {
      this.$modal.show("order-data");
    },
    order: function() {
      console.log(this.selected)
      this.addCheckout({
        data: this.checkout_data,
        payment: this.selected});
      this.$fire({
        title: "Success " + this.product_detail.product_inventories.name,
        text: "text",
        type: "success",
        timer: 1000,
      }).then(() => {});
      setTimeout(() => {
        this.$router.go();
      }, 500);
    },
    changeAge: function(item, event) {
      if (event.target.checked == false) {
        console.log(this);
        // var tokenToRemove;
        const check = this.checkout_data;
        check.forEach((item, index) => {
          if (item._id === item._id) {
            this.checkout_data.splice(index, 1);
          }
        });
      } else {
        this.checkout_data.push(item);
      }
    },
    dashboard_: function() {
      this.$router.push("/");
    },
  },

  watch: {
    $route() {
      // this.cart();
      this.productGet();
    },
  },

  mounted() {
    this.cart();
    this.productGet();
    const token = authHeader().Authorization;
    this.getUserProfileAction(token);
  },
};
</script>

<style>
.modal-checkout {
  overflow: true;
}
</style>
