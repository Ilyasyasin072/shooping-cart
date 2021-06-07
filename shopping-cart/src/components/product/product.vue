<template>
  <!-- <div class="container is-widescree=">
 <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="item in product" :key="item.id">
      <div class="columns is-one-quarter">
        <ProductListItem :product="item" />
      </div>
    </div>
  </div>
 </div> -->
  <b-container>
    <b-row>
      <b-col v-for="item in product" :key="item.id">
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
// import Product_List_Item from "./product_list";
export default {
  name: "ProductList",
  data() {
    return {
      msg: "product",
    };
  },

  components: {
    // ProductListItem: Product_List_Item,
  },

  computed: mapGetters({
    product: "productGet",
  }),
  mounted() {
    this.$store.dispatch("getProduct");
  },
};
</script>
