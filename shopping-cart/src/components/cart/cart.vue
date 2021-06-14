<template>
  <!-- <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <CartListItem :cartItem="cartItem"/>
      </li>
      <div class="notification is-success">
        <button class="delete"></button>
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br>
    </ul>
    <div class="buttons">
    <button :disabled="!cartItems.length" class="button is-info">
      Checkout (<span class="has-text-weight-bold">${{ cartTotal }}</span>)
    </button>

 <button class="button is-danger is-outlined" @click="removeAllCartItems">
    <span>Delete All items</span>
    <span class="icon is-small">
      <i class="fas fa-times"></i>
    </span>
  </button>
       </div>
  </div> -->
  <div class="CartList">
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <ul v-for="user_detail in cartItems.users" :key="user_detail._id">
            <li>{{ user_detail.username }}</li>
            <li>{{ user_detail.first_name }}</li>
            <li>{{ user_detail.last_name }}</li>
            <li>{{ user_detail.email }}</li>
            <li>{{ user_detail.telephone }}</li>
          </ul>
          <b-list-group
            v-for="product_item in cartItems.products"
            :key="product_item._id"
          >
            <b-row>
              <b-col class="mb-3">
                <input
                  type="checkbox"
                  :value="product_item._id"
                  @change="changeAge(product_item, $event)"
                />
                <b-list-group-item disabled
                  >Product : {{ product_item.productId }}</b-list-group-item
                >
                <b-list-group-item
                  >quantity : <b-button class="btn-minus">-</b-button
                  >{{ product_item.quantity
                  }}<b-button class="btn-plus">+</b-button></b-list-group-item
                >
                <b-list-group-item
                  >price : {{ product_item.price }}</b-list-group-item
                >
                <b-list-group-item
                  ><b-button @click="remove(product_item._id)"
                    >remove</b-button
                  ></b-list-group-item
                >
              </b-col>
            </b-row>
          </b-list-group>
          <b-button
            @click="checkout(cartItems)"
            v-if="cartItems.products.length"
            >Checkout</b-button
          >
        </b-col>
      </b-row>
    </b-container>
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
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
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
      console.log(this.checkout_data)
      this.addCheckout(this.checkout_data)
    },
    changeAge: function(item, event) {
      if(event.target.checked === false) {
        // var tokenToRemove;
        const check = this.checkout_data
        check.forEach((item, index) => {
          if(item._id === item._id) {
            this.checkout_data.splice(index, 1)
          }
        })
      } else {
        this.checkout_data.push(item)
      }
    },
  },

  mounted() {
    this.cart();
  },
};
</script>
