<template>
  <div>
    <b-list-group
      v-for="product_item in cartItems.products"
      :key="product_item._id"
    >
      <b-row>
        <b-col class="mb-3">
          <b-list-group-item disabled
            >Product : {{ product_item.productId }}</b-list-group-item
          >
          <b-list-group-item
            >quantity : <b-button class="btn-minus">-</b-button>{{ product_item.quantity }}<b-button class="btn-plus">+</b-button></b-list-group-item
          >
          <b-list-group-item
            >price : {{ product_item.price }}</b-list-group-item
          >
        </b-col>
      </b-row>
    </b-list-group>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItems"],
  methods: {
    ...mapActions(["addCart"]),
  },
};
</script>

<style>
  .btn-minus {
    width: 20px;
    border-radius: 50%;
  }
  .btn-plus {
    width: 20px;
    border-radius: 50%;
  }
</style>